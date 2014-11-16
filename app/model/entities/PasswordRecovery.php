<?php

namespace App\Model\Entities;

use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;

/**
 * @ORM\Entity
 */
class PasswordRecovery extends BaseEntity
{

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var integer
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="passwordRecovery")
     * @var User
     */
    private $user;

    /**
     * @ORM\Column(type="string", unique=true)
     * @var string
     */
    private $token;

    /**
     * @ORM\Column(type="boolean")
     * @var boolean
     */
    private $active;

    public function __construct()
    {
        $this->token = uniqid(true);
        $this->active = TRUE;
    }

    /**
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     *
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     *
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Marks the password recovery item as inactive
     */
    public function disable()
    {
        $this->active = FALSE;
    }


}
