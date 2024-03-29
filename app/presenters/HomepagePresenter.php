<?php

namespace App\Presenters;

use App\Model;
use App\Model\Entities\Invite;
use App\Model\Entities\User;
use Nette;


/**
 * Homepage presenter.
 */
class HomepagePresenter extends BasePresenter
{
    /** @var Invite */
    private $invite;

    /**
     * Redirect logged user to the dashboard
     */
    protected function startup()
    {
        parent::startup();

        if ($this->action != "invite" && $this->user->isLoggedIn()) {
            $this->redirect('Dashboard:default');
        }
    }

    /**
     * Process invite by given token.
     *
     * @param $id
     */
    public function actionInvite($id)
    {
        $dao = $this->em->getDao(Model\Entities\Invite::getClassName());
        $this->invite = $dao->findOneBy(['token' => $id, 'valid' => true]);

        if (!$this->invite) {
            $this->flashMessage('Sorry, invite token is not valid.', 'warning');
            $this->flashMessage('You can sign up tho.', 'info');
            $this->redirect('Sign:up');
        }

        /** @var User $user */
        $user = $this->em->getDao(User::getClassName())->findOneBy(['username' => $this->invite->getEmail()]);
        if ($user) {
            $user->addProject($this->invite->getProject());
            $this->invite->getProject()->addUser($user);

            $this->em->flush();

            if ($this->user->isLoggedIn()) {
                $this->user();
            }

            $this->flashMessage('You have joined ' . $this->invite->getProject()->getName() . ' project!', 'success');
            $this->redirect('Dashboard:default');
        } else {
            $this->redirect('Sign:up', $id);
        }
    }

}
