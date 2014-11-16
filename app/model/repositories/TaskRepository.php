<?php


namespace app\model\repositories;


use App\Model\Entities\Task;
use App\Model\Entities\User;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;

class TaskRepository extends Object
{
    /** @var \Kdyby\Doctrine\EntityDao */
    private $taskDao;

    public function __construct(EntityManager $em)
    {
        $this->taskDao = $em->getDao(Task::getClassName());
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
} 