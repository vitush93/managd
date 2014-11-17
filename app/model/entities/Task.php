<?php

namespace App\Model\Entities;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;

/**
 * @ORM\Entity
 * @ORM\Table(name="tasks")
 */
class Task extends BaseEntity
{
    public static $COLORS = array(
        'orange', 'red', 'yellow', 'blue', 'white', 'purple', 'turq'
    );

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="tasks")
     * @var User
     */
    private $assignee;
    /**
     * @ORM\ManyToOne(targetEntity="Project", inversedBy="tasks")
     * @var Project
     */
    private $project;
    /**
     * @ORM\OneToMany(targetEntity="Comment", mappedBy="task")
     * @var ArrayCollection
     */
    private $comments;
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
    private $title;
    /**
     * @ORM\Column(type="datetime")
     * @var string
     */
    private $created;
    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @var string
     */
    private $due;
    /**
     * @ORM\Column(type="text", nullable=true)
     * @var string
     */
    private $text;
    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $color;
    /**
     * @ORM\Column(type="boolean")
     * @var string
     */
    private $completed;
    /**
     * @ORM\Column(type="string", nullable=true)
     * @var string
     */
    private $lastEdit;

    public function __construct()
    {
        $this->created = new \DateTime();
        $this->comments = new ArrayCollection();
        $this->completed = FALSE;
        $this->color = 'white';
    }

    /**
     * @param Comment $comment
     */
    public function addComment(Comment $comment)
    {
        $this->comments->add($comment);
    }

    /**
     * @return User
     */
    public function getAssignee()
    {
        return $this->assignee;
    }

    /**
     * @param User $user
     */
    public function setAssignee(User $user)
    {
        $user->addTask($this);
        $this->assignee = $user;
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
     * @return ArrayCollection
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * @return string
     */
    public function getCompleted()
    {
        return $this->completed;
    }

    /**
     * @return string
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * @return string
     */
    public function getDue()
    {
        return $this->due;
    }

    /**
     * @param string $due
     */
    public function setDue($due)
    {
        $this->due = $due;
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
    public function getLastEdit()
    {
        return $this->lastEdit;
    }

    /**
     * @param string $lastEdit
     */
    public function setLastEdit($lastEdit)
    {
        $this->lastEdit = $lastEdit;
    }

    /**
     * @return Project
     */
    public function getProject()
    {
        return $this->project;
    }

    /**
     * @param Project $project
     */
    public function setProject(Project $project)
    {
        $project->addTask($this);
        $this->project = $project;
    }

    /**
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param string $text
     */
    public function setText($text)
    {
        $this->text = $text;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * Is the task due?
     *
     * @return bool
     */
    public function isDue()
    {
        $now = new \DateTime();
        return ((int)$now->diff($this->due)->format('%a') <= 0);
    }

    /**
     * How many days are remaining?
     *
     * @return string
     */
    public function getDueOffset()
    {
        $ret = '';
        $now = new \DateTime();

        $diff = $now->diff($this->due);
        if ((int)$diff->format('%a') <= 0) {
            $ret = 'due';
        } else {
            $ret = $diff->format('%a day(s)');
        }

        return $ret;
    }

}