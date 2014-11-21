<?php

namespace App\Model\Repositories;

use Kdyby\Doctrine\Entities\BaseEntity;

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
} 