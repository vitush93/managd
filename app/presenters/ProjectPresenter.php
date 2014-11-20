<?php

namespace App\Presenters;

use App\Model\Entities\Project;
use Kdyby\Doctrine\EntityDao;
use Kdyby\Doctrine\EntityManager;
use Nette\Application\BadRequestException;

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
        $this->template->project = $this->project;
    }
} 