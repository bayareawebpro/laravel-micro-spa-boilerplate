<?php declare(strict_types=1);

namespace Tests\Browser\Auth;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthLoginTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function test_can_register()
    {

        $this->browse(function (Browser $browser) {

            $browser->visit('/auth/register');
            $browser->waitForLocation('/auth/register');
            $browser->assertPathIs('/auth/register');
            $browser->assertSee('Register');

            $browser->assertSee('Name');
            $browser->assertSee('Email Address');
            $browser->assertSee('Password');
            $browser->assertSee('Password Confirmation');

            $browser->script(['window.$duskTestUtils().disableInputValidation()']);

            $browser->click('@action-register');
            $browser->waitForText('The given data was invalid.');
            $browser->assertSee('The name field is required.');
            $browser->assertSee('The email field is required.');
            $browser->assertSee('The password field is required.');

            $user = factory(User::class)->make([
                'password' => 'password',
            ]);
            $browser->type('name', $user->name);
            $browser->type('email', $user->email);
            $browser->type('password', 'password');
            $browser->type('password_confirmation', 'password');

            $browser->click('@action-register');

            $browser->waitForLocation('/account/edit');
            $browser->assertPathIs('/account/edit');
            $browser->assertAuthenticated();
            $browser->logout();
        });
    }

}
