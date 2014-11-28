<?php

namespace App\Presenters;

use App\Libs\FormValidators;
use App\Model\Entities\User;
use App\Model\Notifications;
use App\Model\Repositories\ProjectRepository;
use App\Model\Repositories\TaskRepository;
use App\Model\Repositories\UserRepository;
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

    /** @var ProjectRepository @inject */
    public $projectRepository;

    /** @var TaskRepository @inject */
    public $taskRepository;

    /** @var UserRepository @inject */
    public $userRepository;

    /** @var Notifications @inject */
    public $notifications;

    /** @var FormValidators @inject */
    public $formValidators;

    /** @var EntityManager @inject */
    public $em;

    /**
     * Check user permission to view current page first.
     */
    protected function startup()
    {
        parent::startup();

        if (!$this->user->isAllowed($this->presenter->name)) {
            $this->redirect('Sign:in');
        }
    }

    /**
     * Push notification to the user.
     *
     * @param User $user
     * @param $msg
     */
    public function pushNotification(User $user, $msg)
    {
        $this->notifications->push($user, $msg);

        $this->em->flush();
    }

    /**
     * Mark all user's notifications as read.
     */
    public function readNotifications()
    {
        $this->notifications->markAsRead($this->user());

        $this->em->flush();
    }

    /**
     * Get logged user as User entity instance.
     *
     * @return User
     */
    public function user()
    {
        if (!$this->user->isLoggedIn()) {
            return null;
        }

        if ($this->doctrineUser == null) {
            $this->doctrineUser = $this->userRepository->find($this->user->id);
        }

        return $this->doctrineUser;
    }

    /**
     * Inject user entity to the template.
     */
    public function beforeRender()
    {
        $this->template->userInfo = $this->user();
    }

    /**
     * @param Form $form
     * @param $values
     */
    public function loginFormSucceeded(Form $form, $values)
    {
        try {
            $this->getUser()->login($values->username, $values->password);
            $this->redirect('Dashboard:default');
        } catch (AuthenticationException $e) {
            $this->flashMessage($e->getMessage(), 'danger');
        }
    }

    /**
     * @param null $class
     * @return Nette\Application\UI\ITemplate
     */
    protected function createTemplate($class = NULL)
    {
        $template = parent::createTemplate($class);
        $template->registerHelper('minifyhtml', function ($in) {
            return Minify_HTML::minify($in);
        });

        return $template;
    }

    /**
     * Delete project.
     *
     * @param $id
     */
    public function handleDeleteProject($id)
    {
        $project = $this->projectRepository->find($id);
        if ($project->getOwner() == $this->user()) {
            if ($this->user()->getProjects()->count() == 1) {
                $this->flashMessage('You must own at least one project.', 'danger');
            } else {
                $this->em->remove($project);
                $this->em->flush();
                $this->flashMessage('Project' . $project->getName() . ' has been removed.', 'info');
            }

            if ($this->presenter->name == 'Project') {
                $this->redirect('Dashboard:default');
            } else {
                $this->redirect('this');
            }
        }
    }

    /**
     * Handle multi task delete.
     *
     * @param $ids
     */
    public function handleMultiDelete($ids)
    {
        $this->taskRepository->multiDelete($this->user(), FormValidators::explode($ids));

        $this->flashMessage('Selected tasks have been deleted', 'info');
        $this->redirect('this');
    }

    /**
     * Handle multi task complete.
     *
     * @param $ids
     */
    public function handleMultiComplete($ids)
    {
        $this->taskRepository->multiComplete($this->user(), FormValidators::explode($ids));
        $this->em->flush();

        $this->flashMessage('Selected tasks have been marked as completed', 'info');
        $this->redirect('this');
    }

    /**
     * @param Form $form
     * @param $values
     */
    public function newProject(Form $form, $values)
    {
        $this->projectRepository->add($this->user(), $values->name);
        $this->em->flush();

        $this->redirect('this');
    }

    /**
     * ModalProjectForm factory.
     *
     * @return Form
     */
    protected function createComponentModalProjectForm()
    {
        $form = new Form();

        $form->addText('name', '')
            ->setAttribute('placeholder', 'add new project..')
            ->addRule(Form::MIN_LENGTH, null, 3)
            ->getControlPrototype()->class('form-control');
        $form->addSubmit('send', '')
            ->getControlPrototype()->class('hidden');
        $form->onSuccess[] = $this->newProject;

        return $form;
    }

    /**
     * NavbarLoginForm factory.
     *
     * @return Form
     */
    protected function createComponentNavbarLoginForm()
    {
        $form = new Form();

        $form->getElementPrototype()->class('navbar-form navbar-right');
        $form->addText('username', '')
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
