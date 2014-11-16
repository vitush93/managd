<?php

namespace App\Model\Services;


use App\Model\Entities\PasswordRecovery;
use App\Model\Repositories\UserRepository;
use Doctrine\ORM\EntityNotFoundException;
use Kdyby\Doctrine\EntityDao;
use Kdyby\Doctrine\EntityManager;
use Nette\Object;
use Nette\Security\AuthenticationException;
use Nette\Security\IAuthenticator;
use Nette\Security\Identity;
use Nette\Security\Passwords;

class AuthenticationService extends Object implements IAuthenticator
{
    /** @var \App\Model\Repositories\UserRepository */
    private $userRepository;

    /** @var \Kdyby\Doctrine\EntityManager */
    private $em;

    /** @var EntityDao */
    private $passwordRecoveryDao;

    public function __construct(UserRepository $userRepository, EntityManager $entityManager)
    {
        $this->userRepository = $userRepository;
        $this->em = $entityManager;
        $this->passwordRecoveryDao = $this->em->getDao(PasswordRecovery::getClassName());
    }

    /**
     * Performs authentication.
     *
     * @param array $credentials
     * @return Identity|\Nette\Security\IIdentity
     * @throws AuthenticationException
     */
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

    /**
     * Create password recovery token for user.
     *
     * @param $email
     * @return PasswordRecovery
     * @throws EntityNotFoundException
     */
    public function requestPasswordRecovery($email)
    {
        $user = $this->userRepository->findOneByUsername($email);
        if (!$user) {
            throw new EntityNotFoundException();
        }

        $recover = new PasswordRecovery();
        $recover->setUser($user);

        $this->em->persist($recover);

        return $recover;
    }

    /**
     * Set temporary user password and mark given token as invalid.
     *
     * @param $token
     * @return array
     * @throws EntityNotFoundException
     */
    public function attemptPasswordRecovery($token)
    {
        /** @var PasswordRecovery|null $rec */
        $rec = $this->passwordRecoveryDao->findOneBy(['token' => $token, 'active' => TRUE]);
        if (!$rec) {
            throw new EntityNotFoundException();
        }

        $temp_password = substr(md5(microtime()), 0, 8);
        $user = $rec->getUser();
        $user->setPassword($temp_password);
        $this->em->persist($user);

        $rec->disable();
        $this->em->persist($rec);


        return ['user' => $user, 'password' => $temp_password];
    }
} 