<?php

namespace App\Presenters;

use App\Model;
use App\Model\Entities\Invite;
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

        $user = $this->em->getDao(Model\Entities\User::getClassName())->findOneBy(['username' => $this->invite->getEmail()]);
        if ($user) {
            $user->addProject($this->invite->getProject());
            $this->em->flush();

            $this->flashMessage('You have joined ' . $this->invite->getProject()->getName() . ' project!', 'success');
            $this->redirect('Dashboard:default');
        } else {
            $this->redirect('Sign:up', $id);
        }
    }

}
