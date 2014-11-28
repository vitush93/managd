<?php

namespace App\Presenters;

use App\Model\Entities\Task;
use Nette\Application\BadRequestException;

class TaskPresenter extends BasePresenter
{
    /** @var Task */
    private $task;

    public function actionDefault($id)
    {
        $t = $this->taskRepository->find($id);
        if(!$t) throw new BadRequestException("this task does not exists");
        if(!$t->getProject()->getUsers()->contains($this->user())) throw new BadRequestException("permission denied to view this task");

        $this->task = $t;
    }

    public function renderDefault()
    {
        $this->template->task =$this->task;
    }
} 