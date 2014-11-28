<?php

namespace App\Libs;

use App\Model\Entities\Project;
use App\Model\Entities\Task;
use App\Model\Entities\User;
use Doctrine\Common\Collections\ArrayCollection;
use Kdyby\Doctrine\EntityDao;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;
use Nette\Utils\DateTime;

class FormValidators extends Object
{
    public static $ALLOWED_TASK_OPERATIONS = array('delete', 'complete');

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

    /**
     * Safe parse input separated by comma.
     * - Explode by comma
     * - Remove empty values
     * - Remove duplicates
     * - Reindex array
     *
     * @param string $data
     * @return array
     */
    public static function explode($data)
    {
        $arr = trim($data, ' ,');
        $arr = explode(',', $arr);
        array_walk($arr, function (&$value, $key) {
            $value = trim($value, ' ,');
        });
        $arr = array_values(array_filter(array_unique($arr)));

        return $arr;
    }

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
     * Check if user has rights to modify given tasks.
     *
     * @param array $ids array of task id's
     * @return bool|ArrayCollection
     */
    // TODO
    public function validateTaskOperation(array $ids)
    {
        /** @var ArrayCollection $tasks */
        $tasks = $this->taskRepository->dao()->findBy(['id' => $ids]);

        /** @var Task $task */
        foreach ($tasks as $task) {
            if (!$task->getProject()->getUsers()->contains($this->user())) {
                return false;
            }
        }

        if ($tasks->count() != count($ids)) {
            return false;
        } else {
            return $tasks;
        }
    }

    // TODO
    public function multiTaskValidator($item, $args)
    {
        $ids = self::explode($item->value);

        if (!$ids) return false;

        $validated = $this->validateTaskOperation($ids);
        if ($validated instanceof ArrayCollection) {

        }
    }

    /**
     * [TaskOperations]
     *
     * @param $item
     * @param $args
     * @return bool
     */
    public function taskOperationsValidator($item, $args)
    {
        return in_array($item->value, self::$ALLOWED_TASK_OPERATIONS);
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