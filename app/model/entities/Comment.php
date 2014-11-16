<?php

namespace App\Model\Entities;

use Doctrine\ORM\Mapping as ORM;
use Kdyby\Doctrine\Entities\BaseEntity;

/**
 * @ORM\Entity
 * @ORM\Table(name="comments")
 */
class Comment extends BaseEntity
{
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
    private $author;
    /**
     * @ORM\ManyToOne(targetEntity="Task", inversedBy="comments")
     * @var Task
     */
    private $task;
    /**
     * @ORM\Column(type="text")
     * @var string
     */
    private $text;
    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $posted;

    /**
     * @return User
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param User $user
     */
    public function setAuthor(User $user)
    {
        $this->author = $user;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return \DateTime
     */
    public function getPosted()
    {
        return $this->posted;
    }

    /**
     * @return Task
     */
    public function getTask()
    {
        return $this->task;
    }

    /**
     * @param Task $task
     */
    public function setTask(Task $task)
    {
        $task->addComment($this);
        $this->task = $task;
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

} 