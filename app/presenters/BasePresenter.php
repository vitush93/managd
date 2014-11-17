<?php

namespace App\Presenters;

use App\Model\Entities\User;
use Kdyby\Doctrine\EntityManager;
use Minify_HTML;
use Nette;
use Nette\Application\UI\Form;
use Nette\Security\AuthenticationException;

/**
 * Base presenter for all application presenters.
 */
abstract class BasePresenter extends Nette\Application\UI\Presenter
{
    /** @var User */
    private $doctrineUser;

    /** @var EntityManager @inject */
    public $em;

    /**
     * @return User
     */
    public function user()
    {
        if ($this->doctrineUser == null) {
            $this->doctrineUser = $this->em->find(User::getClassName(), $this->user->id);
        }
        return $this->doctrineUser;
    }

    public function beforeRender()
    {
        $this->template->userInfo = $this->user();
    }

    public function loginFormSucceeded(Form $form, $values)
    {
        try {
            $this->getUser()->login($values->username, $values->password);
            $this->redirect('Dashboard:default');
        } catch (AuthenticationException $e) {
            $this->flashMessage($e->getMessage(), 'danger');
        }
    }

    protected function createTemplate($class = NULL)
    {
        $template = parent::createTemplate($class);
        $template->registerHelper('minifyhtml', function ($in) {
            return Minify_HTML::minify($in);
        });

        return $template;
    }

    protected function createComponentNavbarLoginForm()
    {
        $form = new Form();

        $form->getElementPrototype()->class('navbar-form navbar-right');
        $form->addText('username', '')
            ->setAttribute('autocomplete', 'off')
            ->setAttribute('placeholder', 'Username');
        $form->addPassword('password')
            ->setAttribute('placeholder', 'Password');

        foreach ($form->getControls() as $control) {
            $control->getControlPrototype()->class('form-control');
        }

        $form->addSubmit('process', 'Sign In')
            ->getControlPrototype()->class('btn btn-default');
        $form->onSuccess[] = $this->loginFormSucceeded;

        return $form;
    }

}
