<?php

namespace App\Model\Services;


use App\Model\Repositories\UserRepository;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;
use Nette\Security\IAuthenticator;
use Nette\Security\AuthenticationException;
use Nette\Security\Passwords;
use Nette\Security\Identity;

class AuthenticationService extends Object implements IAuthenticator
{
    /** @var \App\Model\Repositories\UserRepository */
    private $userRepository;

    /** @var \Kdyby\Doctrine\EntityManager */
    private $em;

    public function __construct(UserRepository $userRepository, EntityManager $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->em = $entityManager;
    }

    public function authenticate(array $credentials)
    {
        list($username, $password) = $credentials;

        $user = $this->userRepository->findOneByUsername($username);

        if (!$user) {
            throw new AuthenticationException('The username is incorrect.', self::IDENTITY_NOT_FOUND);
        } elseif (!Passwords::verify($password, $user->getPassword())) {
            throw new AuthenticationException('The password is incorrect.', self::INVALID_CREDENTIAL);
        } elseif (Passwords::needsRehash($user->getPassword())) {
            $user->setPassword($password);

            $this->em->persist($user);
            $this->em->flush();
        }
        
        $data = [$user];

        return new Identity($user->id, 'user', $data);
    }
    
    public function requestPasswordRecovery($email)
    {
        
    }
} 