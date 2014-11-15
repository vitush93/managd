<?php

namespace App\Presenters;

use App\Model;
use App\Model\Services\AuthenticationService;
use Kdyby\Doctrine\DuplicateEntryException;
use Kdyby\Doctrine\EntityManager;
use Nette\Application\UI\Form;
use Nette\Security\AuthenticationException;
use Nette\Mail\Message;
use App\Model\Entities\PasswordRecovery;

/**
 * Sign in/out presenters.
 */
class SignPresenter extends BasePresenter {

    /** @var EntityManager @inject */
    public $em;
    
    /** @var AuthenticationService @inject **/
    public $authenticationService;

    /**
     * Redirect logged user to the dashboard
     */
    public function startup() {
        parent::startup();

        if ($this->action != 'out' && $this->user->isLoggedIn()) {
            $this->redirect('Dashboard:default');
        }
    }

    public function recoveryForm(Form $form, $values) {
        $recover = new PasswordRecovery();
        $recover->setUser($this->user->data[0]);
        
        $this->em->persist($recover);
        $this->em->flush();
        
        $mail = new Message();
    }

    protected function createComponentRecoveryForm() {
        $form = new Form();

        $form->addText('email', 'Your e-mail')
                ->addRule(Form::EMAIL)
                ->setRequired()
                ->getControlPrototype()->class('form-control');

        $form->addSubmit('send', 'Send')
                ->getControlPrototype()->class('btn btn-primary btn-lg btn-block');
        $form->onSuccess[] = $this->recoveryForm;

        return $form;
    }

    /**
     * Register form factory
     * @return Form
     */
    protected function createComponentRegisterForm() {
        $form = new Form();

        $form->addText('username', 'E-mail (will be your username')
                ->addRule(Form::EMAIL)
                ->setRequired();
        $form->addPassword('password', 'Password')
                ->setRequired();
        $form->addPassword('password2', 'Retype password')
                ->setRequired()
                ->addRule(Form::EQUAL, 'Password mismatch.', $form['password'])
                ->setOmitted();
        $form->addText('fullname', 'Your full name');
        $form->addHidden('avatar', 'bob')
                ->setRequired();
        $form->addSubmit('process', 'create account');

        foreach ($form->getControls() as $control) {
            $control->getControlPrototype()->class('form-control');
        }

        $form['avatar']->getControlPrototype()->class('avatar-input');
        $form['process']->getControlPrototype()->class('form-control btn btn-primary btn-lg btn-block');

        $form->onSuccess[] = $this->registerFormSucceeded;

        return $form;
    }

    /**
     * Sign-in form factory.
     * @return Form
     */
    protected function createComponentSignInForm() {
        $form = new Form;
        $form->addText('username', 'Username (your e-mail)')
                ->setRequired('Please enter your username.');

        $form->addPassword('password', 'Password')
                ->setRequired('Please enter your password.');

        foreach ($form->getControls() as $control) {
            $control->getControlPrototype()->class('form-control');
        }

        $form->addCheckbox('remember', 'Keep me signed in')
                ->setDefaultValue(true);

        $form->addSubmit('send', 'sign in')
                ->getControlPrototype()->class('btn btn btn-primary');

        // call method signInFormSucceeded() on success
        $form->onSuccess[] = $this->signInFormSucceeded;
        return $form;
    }

    public function signInFormSucceeded($form, $values) {
        if ($values->remember) {
            $this->getUser()->setExpiration('14 days', FALSE);
        } else {
            $this->getUser()->setExpiration('20 minutes', TRUE);
        }

        try {
            $this->getUser()->login($values->username, $values->password);
            $this->redirect('Dashboard:default');
        } catch (AuthenticationException $e) {
            $form->addError($e->getMessage());
        }
    }

    public function registerFormSucceeded($form, $values) {
        try {
            $user = new Model\Entities\User();
            $user->setUsername($values->username);
            $user->setPassword($values->password);
            $user->setAvatar($values->avatar);
            $user->setFullname($values->fullname);

            $this->em->persist($user);
            $this->em->flush();

            $this->flashMessage('Your registration has been successful. You can now sign in.', 'success');
            $this->redirect('Sign:in');
        } catch (DuplicateEntryException $e) {
            $form->addError("User with that username already exists. Please choose a different one.");
        }
    }

    public function actionOut() {
        $this->getUser()->logout();
        $this->flashMessage('You have been signed out.');
        $this->redirect('in');
    }

}
