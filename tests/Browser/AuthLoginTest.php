<?php declare(strict_types=1);

namespace Tests\Browser;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthLoginTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function test_can_login()
    {

        $this->browse(function (Browser $browser){

            $user = factory(User::class)->create([
                'password' => 'password',
            ]);
            $browser->visit('/auth/login');
            $browser->waitForLocation('/auth/login');
            $browser->assertPathIs('/auth/login');
            $browser->assertSee('Login');

            $browser->script(['window.$duskTestUtils().disableInputValidation()']);
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
            $browser->assertPathIs('/dashboard');
            $browser->assertAuthenticatedAs($user);
            $browser->logout();
        });
    }
}
