<?php

use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Reset Application State
|--------------------------------------------------------------------------
| This command will reset the application to an ideal development state.
*/
Artisan::command('reset', function () {
    $this->alert("Resetting Application...");
    $this->call('cache:clear');
    $this->call('route:clear');
    $this->call('view:clear');
    $this->call('clear-compiled');
    $this->call('migrate:fresh');
    $this->call('db:seed');
})->describe('Reset the Application!');

/*
|--------------------------------------------------------------------------
| Make Sqlite Database
|--------------------------------------------------------------------------
| This command will write or VACUUM an existing database using the
| configured connection settings.
*/
Artisan::command('make:sqlite', function () {
    $path = config('database.connections.sqlite_testing.database');
    exec("touch $path");
})->describe('Make or VACUUM the Sqlite Database');
