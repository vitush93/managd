<?php

namespace App\Presenters;

use Nette,
    App\Model;


/**
 * Homepage presenter.
 */
class HomepagePresenter extends BasePresenter
{

    /**
     * Redirect logged user to the dashboard
     */
    public function startup()
    {
        parent::startup();

        if ($this->user->isLoggedIn()) {
            $this->redirect('Dashboard:default');
        }
    }

}
