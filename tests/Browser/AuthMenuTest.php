<?php declare(strict_types=1);

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class AuthMenuTest extends DuskTestCase
{

    public function test_can_use_menu()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/');
            $browser->waitForLocation('/');

            $browser->click('@account-menu');
            $browser->click('@link-login');
            $browser->waitForLocation('/auth/login');
            $browser->assertPathIs('/auth/login');
            $browser->assertSee('Login');

            $browser->click('@account-menu');
            $browser->click('@link-register');
            $browser->waitForLocation('/auth/register');
            $browser->assertPathIs('/auth/register');
            $browser->assertSee('Register');

            $browser->click('@account-menu');
            $browser->click('@link-forgot');
            $browser->waitForLocation('/auth/forgot');
            $browser->assertPathIs('/auth/forgot');
            $browser->assertSee('Forgot Password');
        });
    }
}
