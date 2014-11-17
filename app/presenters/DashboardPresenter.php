<?php

namespace App\Presenters;

use App\Libs\BootstrapForm;
use App\Model\Entities\Project;
use app\model\repositories\TaskRepository;
use Nette\Application\UI\Form;

class DashboardPresenter extends BasePresenter
{
    /** @var TaskRepository @inject */
    public $taskRepository;

    public function renderDefault()
    {
        $this->template->upcoming = $this->taskRepository->findUpcomingByUser($this->user());
        $this->template->tasks = $this->taskRepository->findByUser($this->user());
    }

    /**
     * Process form and add a new project to the database.
     *
     * @param Form $form
     * @param $values
     */
    public function addProject(Form $form, $values)
    {
        $project = new Project();
        $project->setName($values->name);
        $project->setOwner($this->user());

        $this->em->persist($project);
        $this->em->flush();

        $this->flashMessage('You have created a new project!', 'success');
        $this->redirect('this');
    }

    /**
     * New project form factory.
     *
     * @return Form
     */
    protected function createComponentNewProjectForm()
    {
        $form = new Form();

        $form->addText('name', 'Project name')
            ->addRule(Form::MIN_LENGTH, null, 3)
            ->setRequired();
        $form->addSubmit('process', 'Create');

        $form->onSuccess[] = $this->addProject;

        return BootstrapForm::makeBootstrap($form);
    }
}