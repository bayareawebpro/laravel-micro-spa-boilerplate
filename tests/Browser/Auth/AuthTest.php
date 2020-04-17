<?php declare(strict_types=1);

namespace Tests\Browser\Auth;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function test_can_use_menu()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/');
            $browser->waitForText('Laravel');

            $browser->click('@account-menu');
            $browser->click('@link-login');
            $browser->waitForText('Login');
            $browser->assertPathIs('/auth/login');
            $browser->pause(200);

            $browser->click('@account-menu');
            $browser->click('@link-register');
            $browser->waitForText('Register');
            $browser->assertPathIs('/auth/register');
            $browser->pause(200);

            $browser->click('@account-menu');
            $browser->click('@link-forgot');
            $browser->waitForText('Forgot Password');
            $browser->assertPathIs('/auth/forgot');
            $browser->pause(200);
        });
    }


    public function test_can_register()
    {
        $this->browse(function (Browser $browser) {

            $browser->visit('/auth/register');
            $browser->assertPathIs('/auth/register');
            $browser->waitForText('Register');

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

            $browser->visit('/auth/login');
            $browser->assertPathIs('/auth/login');
            $browser->waitForText('Login');

            $browser->script(['window.$duskTestUtils().disableInputValidation()']);

            $browser->type('email', ' ');
            $browser->keys('[name=email]', '{backspace}');
            $browser->type('password', ' ');
            $browser->keys('[name=password]', '{backspace}');
            $browser->click('@action-login');

            $browser->waitForText('The given data was invalid.');
            $browser->assertSee('The email field is required.');
            $browser->assertSee('The password field is required.');

            $browser->assertSee('Email Address');
            $browser->assertSee('Password');
            $browser->assertSee('Remember Me');

            $browser->type('email', $user->email);
            $browser->type('password', 'password');
            $browser->click('@remember_me');
            $browser->click('@action-login');

            $browser->waitForLocation('/dashboard');
            $browser->assertAuthenticatedAs($user);
        });
    }
}
