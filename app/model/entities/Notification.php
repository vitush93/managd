<?php

namespace App\Model\Entities;

use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;

/**
 * @ORM\Entity
 * @ORM\Table(name="notifications")
 */
class Notification extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="notifications")
     * @var User
     */
    private $user;

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var integer
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $datetime;

    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $message;

    /**
     * @ORM\Column(type="boolean")
     * @var boolean
     */
    private $read;

    public function __construct()
    {
        $this->datetime = new \DateTime();
        $this->read = FALSE;
    }

    /**
     * @return \DateTime
     */
    public function getDatetime()
    {
        return $this->datetime;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @return boolean
     */
    public function isRead()
    {
        return $this->read;
    }

    /**
     * @param string $message
     */
    public function setMessage($message)
    {
        $this->message = $message;
    }

    public function setRead()
    {
        $this->read = TRUE;
    }

    /**
     * @param User $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }



} 