<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Available Abilities / Guards
    |--------------------------------------------------------------------------
    | User defined guards used throughout the application and for validation
    | when adding rules via the SPA UI.  These guards are user selectable.
    */
    'abilities' => [
        '*',
        //'users:viewAny',
        //'users:create',
        'users:view',
        'users:update',
        'users:delete',
        //'users:restore',
        //'users:forceDelete',
    ],

    /*
    |--------------------------------------------------------------------------
    | Stateful Domains
    |--------------------------------------------------------------------------
    | Requests from the following domains / hosts will receive stateful API
    | authentication cookies. Typically, these should include your local
    | and production domains which access your API via a frontend SPA.
    | @docs https://github.com/laravel/airlock
    */
    'stateful' => [
        'localhost',
        'laravel-boilerplate.test',
        env('AIRLOCK_DOMAIN', 'localhost'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Expiration Minutes
    |--------------------------------------------------------------------------
    | This value controls the number of minutes until an issued token will be
    | considered expired. If this value is null, personal access tokens do
    | not expire. This won't tweak the lifetime of first-party sessions.
    */
    'expiration' => null,

    /*
    |--------------------------------------------------------------------------
    | Airlock Middleware
    |--------------------------------------------------------------------------
    | When authenticating your first-party SPA with Airlock you may need to
    | customize some of the middleware Airlock uses while processing the
    | request. You may change the middleware listed below as required.
    */

    'middleware' => [
        'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
    ],
];
