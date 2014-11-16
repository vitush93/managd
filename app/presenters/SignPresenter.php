<?php

namespace App\Presenters;

use App\Model;
use App\Model\Services\AuthenticationService;
use Doctrine\ORM\EntityNotFoundException;
use Kdyby\Doctrine\DuplicateEntryException;
use Kdyby\Doctrine\EntityManager;
use Nette\Application\UI\Form;
use Nette\Mail\Message;
use Nette\Mail\SendmailMailer;
use Nette\Security\AuthenticationException;

/**
 * Sign in/out presenters.
 */
class SignPresenter extends BasePresenter
{

    /** @var EntityManager @inject */
    public $em;

    /** @var AuthenticationService @inject * */
    public $authenticationService;

    /**
     * Redirect logged user to the dashboard
     */
    public function startup()
    {
        parent::startup();

        if ($this->action != 'out' && $this->user->isLoggedIn()) {
            $this->redirect('Dashboard:default');
        }
    }

    public function actionRecovery($id)
    {
        if ($id) {
            try {
                $auth_data = $this->authenticationService->attemptPasswordRecovery($id);
                $this->em->flush();

                $mail = new Message();
                $mail->setFrom("Manag'd <help@managd.com>")
                    ->addTo($auth_data['user']->getUsername())
                    ->setSubject('Password Recovery')
                    ->setHtmlBody('
                    <h1>Password recovery</h1>
                    <p>Your password has been reset. Use this temporary password to login:</p>
                    <h3>' . $auth_data['password'] . '</h3>
                    <p>Peace out,<br>Manag\'d team</p>
                    ');

                $mailer = new SendmailMailer();
                $mailer->send($mail);
            } catch (EntityNotFoundException $e) {
                $this->flashMessage('Given token is not valid', 'danger');
            }
        }
    }

    public function recoveryForm(Form $form, $values)
    {
        try {
            $recovery = $this->authenticationService->requestPasswordRecovery($values->email);
            $this->em->flush();

            $mail = new Message();
            $mail->setFrom("Manag'd <help@managd.com>")
                ->addTo($values->email)
                ->setSubject('Password Recovery')
                ->setHtmlBody('
            <h1>Password recovery</h1>
            <p>Hello, it seems that you have requested an assistance with your password!
            Well, if you haven\'t not please ignore this email. Otherwise, here is your recovery link: <a href="' . $this->link('//Sign:recovery', $recovery->getToken()) . '">click</a>.</p>
            <p>Peace out,<br>Manag\'d team</p>
            ');

            $mailer = new SendmailMailer();
            $mailer->send($mail);
        } catch (EntityNotFoundException $e) {
            $this->flashMessage("E-mail you provided was not found in the database", 'danger');
        }
    }

    public function signInFormSucceeded($form, $values)
    {
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

    public function registerFormSucceeded($form, $values)
    {
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

    public function actionOut()
    {
        $this->getUser()->logout();
        $this->flashMessage('You have been signed out.');
        $this->redirect('in');
    }

    protected function createComponentRecoveryForm()
    {
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
    protected function createComponentRegisterForm()
    {
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
        $form->addText('fullname', 'Your full name')
            ->setRequired();
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
    protected function createComponentSignInForm()
    {
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

}
