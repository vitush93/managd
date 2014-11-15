<?php

namespace App\Presenters;

use Minify_HTML;
use Nette;
use Nette\Application\UI\Form;
use Nette\Security\AuthenticationException;

/**
 * Base presenter for all application presenters.
 */
abstract class BasePresenter extends Nette\Application\UI\Presenter
{

    protected function createTemplate($class = NULL)
    {
        $template = parent::createTemplate($class);
        $template->registerHelper('minifyhtml', function ($in) {
            return Minify_HTML::minify($in);
        });

        return $template;
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
