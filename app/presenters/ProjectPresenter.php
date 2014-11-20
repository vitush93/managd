<?php

namespace App\Presenters;

use App\Model\Entities\Invite;
use App\Model\Entities\Project;
use Kdyby\Doctrine\EntityDao;
use Kdyby\Doctrine\EntityManager;
use Nette\Application\BadRequestException;
use Nette\Application\UI\Form;
use Nette\Mail\Message;
use Nette\Mail\SendmailMailer;

class ProjectPresenter extends BasePresenter
{
    /** @var Project */
    private $project;

    /** @var EntityDao */
    private $projectDao;

    /** @var EntityManager @inject */
    public $em;

    protected function startup()
    {
        parent::startup();

        $this->projectDao = $this->em->getDao(Project::getClassName());
    }

    public function actionDefault($id)
    {
        $p = $this->projectDao->find($id);
        if (!$p) throw new BadRequestException;
        $this->project = $p;
    }

    public function renderDefault($id)
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
            ->setSubject($this->user()->getFullname().' invited you to work on a project!')
            ->setHtmlBody('
            <h1>Hi, you have been invited to collaborate on '.$this->project->name.'</h1>
            <p>Proceed by clicking on <a href="'.$this->link('//Homepage:invite', $inv->getToken()).'">here</a>.</p>
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
} 