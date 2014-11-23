<?php

namespace App\Libs;


use App\Model\Entities\Project;
use App\Model\Entities\Task;
use App\Model\Entities\User;
use Kdyby\Doctrine\EntityDao;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;
use Nette\Utils\DateTime;

class FormValidators extends Object
{
    /** @var EntityManager */
    private $em;

    /** @var EntityDao */
    private $projectDao;

    /** @var EntityDao */
    private $userDao;

    /** @var User */
    private $user = NULL;

    /** @var Project */
    private $project = NULL;

    public function __construct(EntityManager $entityManager)
    {
        $this->em = $entityManager;
        $this->projectDao = $entityManager->getDao(Project::getClassName());
        $this->userDao = $entityManager->getDao(User::getClassName());
    }

    /**
     * [NewTaskForm]
     * Check if given string a valid date.
     *
     * @param $item
     * @param $args
     * @return bool
     */
    public function dueValidator($item, $args)
    {
        try {
            $date = DateTime::from($item->value);
        } catch (\Exception $e) {
            return false;
        }
        $now = new \DateTime();
        return $date && ($now < $date);
    }

    /**
     * [NewTaskForm]
     * Check if given string is a valid task color.
     *
     * @param $item
     * @param $args
     * @return bool
     */
    public function colorValidator($item, $args)
    {
        return in_array($item->value, Task::$COLORS);
    }

    /**
     * [NewTaskForm]
     * Check if logged user has permission to add task to current project.
     *
     * @param $item
     * @param $args
     * @return bool
     */
    public function assigneeValidator($item, $args)
    {
        $u = $this->userDao->find($item->value);
        if ($u != null) {
            return $this->project->getUsers()->contains($u);
        } else {
            return false;
        }
    }

    /**
     * @return Project
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * @param Project $project
     */
    public function setProject($project)
    {
        $this->project = $project;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }


}