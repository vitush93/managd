<?php

namespace App\Model\Repositories;

use Kdyby\Doctrine\Entities\BaseEntity;
use Kdyby\Doctrine\EntityDao;

interface IRepository
{
    /**
     * @param $id integer
     * @return null|BaseEntity
     */
    public function find($id);

    /**
     * @return array
     */
    public function findAll();

    /**
     * @param $id integer
     * @return void
     */
    public function remove($id);

    /**
     * @return EntityDao
     */
    public function dao();
} 