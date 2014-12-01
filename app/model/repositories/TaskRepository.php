<?php


namespace App\Model\Repositories;


use App\Model\Entities\Task;
use App\Model\Entities\User;
use Doctrine\Common\Collections\Criteria;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;

class TaskRepository extends Object implements IRepository
{
    /** @var \Kdyby\Doctrine\EntityDao */
    private $taskDao;

    /** @var EntityManager */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->taskDao = $em->getDao(Task::getClassName());
        $this->em = $em;
    }

    /**
     * @return \Kdyby\Doctrine\EntityDao
     */
    public function dao()
    {
        return $this->taskDao;
    }


    /**
     * Delete multiple tasks by id.
     *
     * @param User $user
     * @param array $ids
     */
    public function multiDelete(User $user, array $ids)
    {
        /** @var Task $task */
        foreach($this->validateMultiOperation($user, $ids) as $task) {
            $this->taskDao->delete($task);
        }
    }

    /**
     * Check if tasks are assigned to the User.
     *
     * @param User $user
     * @param array $ids
     * @return array|\Doctrine\Common\Collections\Collection|static
     */
    private function validateMultiOperation(User $user, array $ids)
    {
        $tasks = $user->getTasks()->matching(
            Criteria::create()
                ->where(Criteria::expr()->in('id', $ids))
        );

        if (count($ids) == count($tasks)) {
            return $tasks;
        } else {
            return array();
        }
    }

    /**
     * Multi task complete by ids.
     *
     * @param User $user
     * @param array $ids
     */
    public function multiComplete(User $user, array $ids)
    {
        /** @var Task $task */
        foreach ($this->validateMultiOperation($user, $ids) as $task) {
            $task->setCompleted();
            $this->em->persist($task);
        }
    }

    /**
     * Get upcoming tasks with 2 day threshold
     *
     * @param User $user
     * @return array
     */
    public function findUpcomingByUser(User $user)
    {
        return $this->taskDao->createQueryBuilder('a')
            ->leftJoin('a.project', 'p')
            ->where('a.assignee = (:user)')
            ->andWhere('a.due < (:due)')
            ->setParameter('user', $user)
            ->setParameter('due', new \DateTime('+2 days'))
            ->getQuery()->getResult();
    }

    /**
     * @param User $user
     * @return array
     */
    public function findByUser(User $user)
    {
        return $this->taskDao->findBy(['assignee' => $user]);
    }

    /**
     * @param $id
     * @return Task
     */
    public function find($id)
    {
        return $this->taskDao->find($id);
    }

    /**
     * @return array
     */
    public function findAll()
    {
        return $this->taskDao->findAll();
    }

    /**
     * @param $id
     */
    public function remove($id)
    {
        $this->em->remove($this->find($id));
    }


} 