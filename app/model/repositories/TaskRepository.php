<?php


namespace App\Model\Repositories;


use App\Model\Entities\Task;
use App\Model\Entities\User;
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
     * @return null|object
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