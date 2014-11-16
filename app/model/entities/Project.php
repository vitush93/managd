<?php

namespace App\Model\Entities;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;

/**
 * @ORM\Entity
 * @ORM\Table(name="projects")
 */
class Project extends BaseEntity
{
    /**
     * @ORM\OneToMany(targetEntity="Task", mappedBy="project")
     * @var ArrayCollection
     */
    private $tasks;
    /**
     * @ORM\ManyToMany(targetEntity="User", inversedBy="projects")
     * @var ArrayCollection
     */
    private $users;
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
    private $name;
    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $icon;
    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $color;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->tasks = new ArrayCollection();
    }

    /**
     * @param Task $task
     */
    public function addTask(Task $task)
    {
        $this->tasks->add($task);
    }

    /**
     * @param User $user
     */
    public function addUser(User $user)
    {
        $user->addProject($this);
        $this->users->add($user);
    }

    /**
     * @return string
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * @param string $color
     */
    public function setColor($color)
    {
        $this->color = $color;
    }

    /**
     * @return string
     */
    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * @param string $icon
     */
    public function setIcon($icon)
    {
        $this->icon = $icon;
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
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return ArrayCollection
     */
    public function getTasks()
    {
        return $this->tasks;
    }

    /**
     * @return ArrayCollection
     */
    public function getUsers()
    {
        return $this->users;
    }


}