<?php

namespace App\Presenters;

use App\Model\Entities\Invite;
use App\Model\Entities\Project;
use App\Model\Entities\Task;
use Nette\Application\BadRequestException;
use Nette\Application\UI\Form;
use Nette\Mail\Message;
use Nette\Mail\SendmailMailer;
use Nette\Utils\DateTime;

class ProjectPresenter extends BasePresenter
{
    /** @var Project */
    private $project;

    public function actionDefault($id)
    {
        $p = $this->projectRepository->find($id);
        if (!$p) throw new BadRequestException; // is there such a project?
        if (!$p->getUsers()->contains($this->user())) throw new BadRequestException; // does current user actually collaborating on this project?

        $this->project = $p;
    }

    public function renderDefault()
    {
        if (!isset($this->template->var)) {
            $this->template->var = 'default';
        }
        $this->template->project = $this->project;
    }

    /**
     * Process projectName form.
     *
     * @param Form $form
     * @param $values
     */
    public function changeProjectName(Form $form, $values)
    {
        if ($this->project->getOwner() != $this->user()) return;

        $this->project->setName($values->name);
        $this->em->flush();

        if (!$this->isAjax()) {
            $this->redirect('this');
        }
    }

    /**
     * Process inviteUser form.
     *
     * @param Form $form
     * @param $values
     */
    public function inviteUser(Form $form, $values)
    {
        $inv = new Invite();
        $inv->setProject($this->project);
        $inv->setEmail($values->email);

        $this->em->persist($inv);
        $this->em->flush();

        $this->template->inv = true;
        $this['inviteForm']['email']->setValue('');

        $mail = new Message();
        $mail->setFrom("Manag'd <help@managd.com>")
            ->addTo($values->email)
            ->setSubject($this->user()->getFullname() . ' invited you to work on a project!')
            ->setHtmlBody('
            <h1>Hi, you have been invited to collaborate on ' . $this->project->name . '</h1>
            <p>Proceed by clicking on <a href="' . $this->link('//Homepage:invite', $inv->getToken()) . '">here</a>.</p>
            <p>Peace out,<br>Manag\'d team</p>
            ');
        $mailer = new SendmailMailer();
        $mailer->send($mail);

        if ($this->isAjax()) {
            $this->redrawControl('inv');
        } else {
            $this->redirect('this');
        }
    }

    /**
     * InviteForm factory.
     *
     * @return Form
     */
    protected function createComponentInviteForm()
    {
        $form = new Form();
        $form->getElementPrototype()->class('ajax');

        $form->addText('email', '')
            ->addRule(Form::EMAIL)
            ->setAttribute('placeholder', 'invite by e-mail')
            ->getControlPrototype()->class('form-control invite');
        $form->addSubmit('send', '')
            ->getControlPrototype()
            ->class('form-control hidden');
        $form->onSuccess[] = $this->inviteUser;

        return $form;
    }

    /**
     * ProjectName form factory.
     *
     * @return Form
     */
    protected function createComponentProjectName()
    {
        $form = new Form();
        $form->getElementPrototype()->class('ajax');

        $form->addText('name', '')
            ->setDefaultValue($this->project->name)
            ->setRequired()
            ->getControlPrototype()->class('form-control project-name');
        $form->addSubmit('send', '')
            ->getControlPrototype()->class('form-control hidden');
        $form->onSuccess[] = $this->changeProjectName;

        return $form;
    }

    /**
     * Adds a new task.
     *
     * @param Form $form
     * @param $values
     */
    public function newTask(Form $form, $values)
    {
        $task = new Task();
        $task->setProject($this->project);
        $task->setAssignee($this->userRepository->find($values->assignee));
        $task->setColor($values->color);
        if (!empty($values->due)) {
            $task->setDue(new DateTime($values->due));
        }
        $task->setText($values->text);
        $task->setTitle($values->title);

        $this->em->persist($task);
        $this->em->flush();

        $this->flashMessage('New task ' . $task->getTitle() . ' has been created', 'success');
        $this->redirect('this');
    }

    /**
     * NewTask modal form factory.
     *
     * @return Form
     */
    protected function createComponentNewTaskForm()
    {
        $this->formValidators->setUser($this->user());
        $this->formValidators->setProject($this->project);

        $form = new Form();
        $form->addText('title', 'Title')
            ->setAttribute('autocomplete', 'off')
            ->setRequired()
            ->addRule(Form::MIN_LENGTH, null, 3);
        $form->addText('due', 'Due date')
            ->setAttribute('autocomplete', 'off')
            ->addCondition(Form::FILLED)
            ->addRule($this->formValidators->dueValidator, 'Please insert a valid date.');
        $form->addTextArea('text', 'Text', 10, 8)
            ->setAttribute('placeholder', "The shopping list\n=================\nIt is *essential* to acquire following items:\n- bread\n- beer\n- potatoes");

        foreach ($form->getControls() as $control) {
            $control->getControlPrototype()
                ->class('form-control');
        }
        $form['due']->getControlPrototype()
            ->class('form-control datepicker');

        $form->addHidden('assignee', $this->user()->getId())
            ->setRequired()
            ->addRule($this->formValidators->assigneeValidator, 'Permission denied.')
            ->getControlPrototype()->class('picked-assignee');
        $form->addHidden('color', 'white')
            ->setRequired()
            ->addRule($this->formValidators->colorValidator, 'Please enter a valid color.');

        $form->addSubmit('send', 'Create Task')
            ->getControlPrototype()
            ->class('btn btn-primary');

        $form->onSuccess[] = $this->newTask;

        return $form;
    }
} 