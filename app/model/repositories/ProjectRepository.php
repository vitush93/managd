<?php

namespace App\Model\Repositories;

use App\Model\Entities\Project;
use App\Model\Entities\User;
use Kdyby\Doctrine\EntityDao;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;

class ProjectRepository extends Object
{
    /** @var EntityManager */
    private $em;

    /** @var EntityDao */
    private $projectDao;

    public function __construct(EntityManager $entityManager)
    {
        $this->em = $entityManager;

        $this->projectDao = $entityManager->getDao(Project::getClassName());
    }

    /**
     * @return EntityDao
     */
    public function dao()
    {
        return $this->projectDao;
    }

    /**
     * @param User $user
     * @return array
     */
    public function projectPairs(User $user)
    {
        $pairs = array();
        foreach ($user->getProjects() as $project) {
            $pairs[$project->id] = $project->name;
        }
        return $pairs;
    }

    /**
     * @param $id
     * @return null|Project
     */
    public function find($id)
    {
        return $this->projectDao->find($id);
    }

    /**
     * Add new project.
     *
     * @param User $owner
     * @param $name
     */
    public function add(User $owner, $name)
    {
        $project = new Project();
        $project->setName($name);
        $project->setOwner($owner);

        $this->em->persist($project);
    }
} 