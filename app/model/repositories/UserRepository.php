<?php

namespace App\Model\Repositories;

use App\Model\Entities\User;
use Kdyby\Doctrine\EntityDao;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;

class UserRepository extends Object implements IRepository
{

    /** @var EntityDao */
    private $userDao;

    /** @var EntityManager */
    private $em;

    public function __construct(EntityManager $entityManager)
    {
        $this->userDao = $entityManager->getDao(User::getClassName());
        $this->em = $entityManager;
    }

    /**
     * @return EntityDao
     */
    public function dao()
    {
        return $this->userDao;
    }

    /**
     * @param $username
     * @return null|User
     */
    public function findOneByUsername($username)
    {
        return $this->userDao->findOneBy(array('username' => $username));
    }

    /**
     * @param integer $id
     * @return null|User
     */
    public function find($id)
    {
        return $this->userDao->find($id);
    }

    /**
     * @return array
     */
    public function findAll()
    {
        return $this->userDao->findAll();
    }

    /**
     * @param integer $id
     */
    public function remove($id)
    {
        $this->em->remove($this->find($id));
    }

} 