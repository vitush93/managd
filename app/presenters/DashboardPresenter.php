<?php

namespace App\Presenters;

use App\Libs\BootstrapForm;
use Nette\Application\UI\Form;

class DashboardPresenter extends BasePresenter
{
    /**
     * Process form and add a new project to the database.
     *
     * @param Form $form
     * @param $values
     */
    public function addProject(Form $form, $values)
    {
        $this->projectRepository->add($this->user(), $values->name);
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