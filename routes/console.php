<?php

use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('reset', function () {
    $this->alert("Resetting Application...");
    $this->call('migrate:fresh');
    $this->call('db:seed');
    $this->call('clear:all');
})->describe('Reset the Application Entirely?!');

Artisan::command('make:test-db', function () {
    $path = database_path('testing.db');
    exec("sqlite3 $path \"VACUUM;\"");
})->describe('Reset the Application Entirely?!');

Artisan::command('clear:all', function () {
    $this->alert("Flushing Application Caches & Storage...");
    //$this->call('telescope:clear');
    $this->call('cache:clear');
    $this->call('route:clear');
    $this->call('view:clear');
    $this->call('clear-compiled');
})->describe('Clear the Application Caches...');
