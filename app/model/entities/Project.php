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
    public static $COLORS = array(
        'orange', 'red', 'yellow', 'blue', 'white', 'purple', 'turq'
    );

    public static $ICONS = array(
        'fa-angellist', 'fa-plug', 'fa-beer', 'fa-bolt', 'fa-globe', 'fa-graduation-cap', 'fa-bomb', 'fa-life-ring', 'fa-institution'
    );

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @var User
     */
    private $owner;

    /**
     * @ORM\OneToMany(targetEntity="Task", mappedBy="project")
     * @var ArrayCollection
     */
    private $tasks;

    /**
     * @ORM\OneToMany(targetEntity="Invite", mappedBy="project")
     * @var ArrayCollection
     */
    private $invites;

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
        $this->invites = new ArrayCollection();
        $this->icon = self::$ICONS[rand(0, count(self::$ICONS) - 1)];
        $this->color = self::$COLORS[rand(0, count(self::$COLORS) - 1)];
    }

    /**
     * @param Task $task
     */
    public function addTask(Task $task)
    {
        $this->tasks->add($task);
    }

    /**
     * @param Invite $invite
     */
    public function addInvite(Invite $invite)
    {
        $this->invites->add($invite);
    }

    /**
     * @param User $user
     */
    public function addUser(User $user)
    {
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

    /**
     * @return User
     */
    public function getOwner()
    {
        return $this->owner;
    }

    /**
     * @param User $owner
     */
    public function setOwner(User $owner)
    {
        $owner->addProject($this);
        $this->addUser($owner);
        $this->owner = $owner;
    }

    /**
     * @param User $user
     * @return bool
     */
    public function isOwner(User $user)
    {
        return ($this->owner == $user);
    }

}