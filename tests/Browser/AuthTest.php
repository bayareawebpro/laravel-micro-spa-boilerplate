<?php declare(strict_types=1);

namespace Tests\Browser\Auth;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class AuthTest extends DuskTestCase
{
    public function test_can_register()
    {
        $this->browse(function (Browser $browser) {

            $browser->visit('/register');
            $browser->assertPathIs('/register');
            $browser->waitForText('Register');

            $browser->assertSee('Name');
            $browser->assertSee('Email Address');
            $browser->assertSee('Password');
            $browser->assertSee('Password Confirmation');

            $browser->click('@submit');
            $browser->waitForText('The given data was invalid.');
            $browser->assertSee('The name field is required.');
            $browser->assertSee('The email field is required.');
            $browser->assertSee('The password field is required.');

            $browser->type('name', 'test@test.test');
            $browser->type('email', 'test@test.test');
            $browser->type('password', 'password');
            $browser->type('password_confirmation', 'password');
            $browser->click('@action-register');

            $browser->waitForLocation('/account/edit');
            $browser->assertPathIs('/account/edit');

            $browser->logout();
        });
    }

    public function test_can_login()
    {
        $user = factory(User::class)->create([
            'password' => 'password',
        ]);

        $this->browse(function (Browser $browser) use ($user) {

            $browser->visit('/login');
            $browser->assertPathIs('/login');
            $browser->waitForText('Login');

            $browser->click('@submit');
            $browser->waitForText('The given data was invalid.');

            $browser->assertSee('The email field is required.');
            $browser->assertSee('The password field is required.');

            $browser->assertSee('Email Address');
            $browser->assertSee('Password');
            $browser->assertSee('Remember Me');

            $browser->type('email', $user->email);
            $browser->type('password', 'password');
            $browser->click('@remember_me');
            $browser->click('@submit');

            $browser->waitForLocation('/');
            $browser->assertAuthenticatedAs($user);
        });
    }
}
