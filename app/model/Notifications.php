<?php


namespace App\Model;


use App\Model\Entities\Notification;
use App\Model\Entities\User;
use Doctrine\Common\Collections\Criteria;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;

class Notifications extends Object
{
    /** @var EntityManager */
    private $em;

    /** @var \Kdyby\Doctrine\EntityDao */
    private $notificationDao;

    public function __construct(EntityManager $entityManager)
    {
        $this->em = $entityManager;
        $this->notificationDao = $entityManager->getDao(Notification::getClassName());
    }

    /**
     * @param User $user
     * @param $msg
     */
    public function push(User $user, $msg)
    {
        $n = new Notification();
        $n->setMessage($msg);
        $n->setUser($user);

        $this->em->persist($n);
    }

    /**
     * Mark all user's notifications as read.
     *
     * @param User $user
     */
    public function markAsRead(User $user)
    {
        /** @var Notification $not */
        foreach($user->getNotifications()->matching(
            Criteria::create()
                ->where(Criteria::expr()->eq('read', false))) as $not
        ) {
            $not->setRead();
            $this->em->persist($not);
        }
    }
} 