<?php

namespace App\Presenters;

use app\model\repositories\TaskRepository;

class DashboardPresenter extends BasePresenter
{

    /** @var TaskRepository @inject */
    public $taskRepository;

    public function renderDefault()
    {
        $this->template->upcoming = $this->taskRepository->findUpcomingByUser($this->user());
        $this->template->tasks = $this->taskRepository->findByUser($this->user());
        $this->template->remaining = function (\DateTime $dateTime) {
            $now = new \DateTime();
            return $now->diff($dateTime)->format('%a day(s)');
        };
    }

}