<?php

namespace App\Presenters;

use App\Model\Entities\Task;
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

    /**
     * Adds new task.
     *
     * @param Form $form
     * @param $values
     */
    public function newTask(Form $form, $values)
    {
        // TODO if project - validate assignees
        // TODO if not project - validate project
        // TODO check if user actually owns given project
        dump($values);
        die;
    }

    /**
     * NewTask modal form factory.
     *
     * @return Form
     */
    protected function createComponentNewTaskForm()
    {
        $form = new Form();

        $form->addText('title', 'Title')
            ->setRequired()
            ->addRule(Form::MIN_LENGTH, null, 3);
        $form->addText('due', 'Due date')
            ->setRequired()
            ->setAttribute('autocomplete', 'off')
            ->addRule(function ($item, $arg) {
                try {
                    $date = Nette\Utils\DateTime::from($item->value);
                } catch (\Exception $e) {
                    return false;
                }
                $now = new \DateTime();
                return $date && ($now < $date);
            }, 'Please insert a valid date.');
        $form->addTextArea('text', 'Text', 10, 6)
            ->setOmitted('description', 'Markdown syntax');
        $form->addSelect('project', 'Project', $this->projectRepository->projectPairs($this->user()))
            ->setRequired();

        if ($this->presenter->name == 'Project') {
            $form['project']->setDefaultValue($this->getParameter('id'));
        }

        foreach ($form->getControls() as $control) {
            $control->getControlPrototype()->class('form-control');
        }
        $form['due']->getControlPrototype()->class('form-control datepicker');


        $form->addHidden('assignee', $this->user()->getId())
            ->setRequired();
        $form->addHidden('color', 'white')
            ->addRule(function ($item, $arg) {
                return in_array($item->value, Task::$COLORS);
            }, 'Please enter a valid color.')
            ->setRequired();

        $form->addSubmit('send', 'Create Task')
            ->getControlPrototype()->class('btn btn-primary');

        $form->onSuccess[] = $this->newTask;

        return $form;
    }

}
