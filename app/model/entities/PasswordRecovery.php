<?php

namespace App\Model\Entities;

use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;
use App\Model\Entities\User;

/**
 * @ORM\Entity
 */
class PasswordRecovery extends BaseEntity {

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var integer
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @var User
     */
    private $user;

    /**
     * @ORM\Column(type="string", unique=true)
     * @var string
     */
    private $token;

    public function __construct() {
        $this->token = uniqid(true);
    }
    
    /**
     * @return integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * 
     * @return User
     */
    public function getUser() {
        return $this->user;
    }

    /**
     * 
     * @return string
     */
    public function getToken() {
        return $this->token;
    }

    public function setUser(User $user) {
        $this->user = $user;
    }

    private function setToken($token) {
        $this->token = $token;
    }


}
