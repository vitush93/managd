<?php

namespace App\Model\Entities;

use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;

/**
 * @ORM\Entity
 * @ORM\Table(name="invites")
 */
class Invite extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="Project", inversedBy="invites")
     * @var Project
     */
    private $project;

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var integer
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $email;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $datetime;

    /**
     * @ORM\Column(type="boolean")
     * @var bool
     */
    private $valid;

    /**
     * @ORM\Column(type="string", unique=true)
     * @var string
     */
    private $token;

    public function __construct()
    {
        $this->token = md5(microtime());
        $this->valid = TRUE;
        $this->datetime = new \DateTime();
    }

    /**
     * @return \DateTime
     */
    public function getDatetime()
    {
        return $this->datetime;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return Project
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * @return boolean
     */
    public function isValid()
    {
        return $this->valid;
    }

    /**
     * @param Project $project
     */
    public function setProject(Project $project)
    {
        $project->addInvite($this);
        $this->project = $project;
    }

    /**
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function invalidate()
    {
        $this->valid = FALSE;
    }
} 