<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function test()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit(route('app'))
                ->assertSee('Provisioner')
                ->waitForLocation('/auth/login')
                ->assertPathIs('/auth/login')
                ->assertSee('Unauthenticated');

            $browser->script(/** @lang JavaScript */ <<<SCRIPT
            console.log(\$app())
            SCRIPT);

            $browser->pause(10000);
        });
    }
}
