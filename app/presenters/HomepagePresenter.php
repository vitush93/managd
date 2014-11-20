<?php

namespace App\Presenters;

use App\Model;
use Nette;


/**
 * Homepage presenter.
 */
class HomepagePresenter extends BasePresenter
{

    /**
     * Redirect logged user to the dashboard
     */
    protected function startup()
    {
        parent::startup();

        if ($this->user->isLoggedIn()) {
            $this->redirect('Dashboard:default');
        }
    }

}
