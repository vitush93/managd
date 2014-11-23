<?php

namespace App\Presenters;

use App\Libs\FormValidators;
use App\Model\Entities\Task;
use App\Model\Entities\User;
use App\Model\Notifications;
use App\Model\Repositories\ProjectRepository;
use App\Model\Repositories\TaskRepository;
use App\Model\Repositories\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
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
     * Check if user has rights to modify given tasks.
     *
     * @param array $ids array of task id's
     * @return bool|ArrayCollection
     */
    private function validateTaskOperation(array $ids)
    {
        /** @var ArrayCollection $tasks */
        $tasks = $this->taskRepository->dao()->findBy(['id' => $ids]);

        /** @var Task $task */
        foreach ($tasks as $task) {
            if (!$task->getProject()->getUsers()->contains($this->user())) {
                return false;
            }
        }

        if ($tasks->count() != count($ids)) {
            return false;
        } else {
            return $tasks;
        }
    }

    /**
     * Perform multiple task operations (delete / mark as completed)
     * TODO rework as form
     * @param string $operation [delete, complete]
     * @param array $ids
     * @throws Nette\Application\BadRequestException
     */
    public function handleTaskOperation($operation, $ids)
    {
        FormValidators::explode($ids);
        if ($ids) {
            $validated = $this->validateTaskOperation($ids);
            if ($validated instanceof ArrayCollection) {
                if ($operation == 'delete') {
                    $this->taskRepository->dao()->delete($validated);
                    $this->flashMessage('Selected tasks had been deleted', 'info');
                    $this->redirect('this');
                } else if ($operation == 'complete') {

                    /** @var Task $task */
                    foreach($validated as $task) {
                        $task->setCompleted();
                        $this->em->persist($task);
                    }

                    $this->em->flush();
                } else {
                    throw new Nette\Application\BadRequestException;
                }
            }
        } else {
            throw new Nette\Application\BadRequestException;
        }
    }

    /**
     * @param Form $form
     * @param $values
     */
    public function taskOperations(Form $form, $values)
    {
        dump($values);
        die;
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
