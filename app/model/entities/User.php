<?php

namespace App\Model\Entities;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;
use Nette\InvalidArgumentException;
use Nette\Security\Passwords;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class User extends BaseEntity
{
    public static $AVATARS = array(
        'bob',
        'jarry',
        'jonathan',
        'mike',
        'suzanne',
        'tom'
    );

    /**
     * @ORM\OneToMany(targetEntity="task", mappedBy="assignee")
     * @var ArrayCollection
     */
    private $tasks;

    /**
     * @ORM\OneToMany(targetEntity="PasswordRecovery", mappedBy="user", cascade={"persist", "remove"})
     * @var ArrayCollection
     */
    private $passwordRecovery;

    /**
     * @ORM\OneToMany(targetEntity="Notification", mappedBy="user")
     * @var ArrayCollection
     */
    private $notifications;

    /**
     * @ORM\ManyToMany(targetEntity="Project", mappedBy="users")
     * @var ArrayCollection
     */
    private $projects;

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     * @var integer
     */
    private $id;

    /**
     * @ORM\Column(type="string", unique=true)
     * @var string
     */
    private $username;

    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $password;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $registered;

    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $fullname;

    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $avatar;

    public function __construct()
    {
        $this->registered = new \DateTime();
        $this->passwordRecovery = new ArrayCollection();
        $this->tasks = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->projects = new ArrayCollection();
    }

    /**
     * @param Task $task
     */
    public function addTask(Task $task)
    {
        $this->tasks->add($task);
    }

    /**
     * @param Notification $notification
     */
    public function addNotification(Notification $notification)
    {
        $this->notifications->add($notification);
    }

    /**
     * @param Project $project
     */
    public function addProject(Project $project)
    {
        $this->projects->add($project);
    }

    /**
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param string $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = Passwords::hash($password);
    }

    /**
     * @return \DateTime
     */
    public function getRegistered()
    {
        return $this->registered;
    }

    /**
     * @return string
     */
    public function getFullname()
    {
        return $this->fullname;
    }

    /**
     * @param string $fullname
     */
    public function setFullname($fullname)
    {
        $this->fullname = $fullname;
    }

    /**
     * @return string
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * @param string $avatar
     */
    public function setAvatar($avatar)
    {
        if (!in_array($avatar, self::$AVATARS)) {
            throw new InvalidArgumentException;
        }
        $this->avatar = $avatar;
    }

    /**
     * @return ArrayCollection
     */
    public function getProjects()
    {
        return $this->projects;
    }

    /**
     * @return ArrayCollection
     */
    public function getOwned()
    {
        return $this->owned;
    }

    /**
     * @return ArrayCollection
     */
    public function getPasswordRecovery()
    {
        return $this->passwordRecovery;
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
    public function getNotifications()
    {
        return $this->notifications;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection|static
     */
    public function getUnreadNotifications()
    {
        $crit = Criteria::create()
            ->where(Criteria::expr()->eq('read', TRUE))
            ->orderBy(array('datetime' => 'DESC'));

        return $this->notifications->matching($crit);
    }

    /**
     * Has this user any upcoming tasks?
     *
     * @return bool
     */
    public function hasUpcoming()
    {
        foreach($this->tasks as $t) {
            if($t->isUpcoming()) {
                return true;
            }
        }

        return false;
    }

}