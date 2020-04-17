<?php

use Illuminate\Support\Facades\{App, Route};
use Illuminate\Validation\ValidationException;

/*
|--------------------------------------------------------------------------
| API Routes: Public
|--------------------------------------------------------------------------
*/
//...

/*
|--------------------------------------------------------------------------
| API Routes: Authorized
|--------------------------------------------------------------------------
*/
Route::group(['middleware' => 'auth:sanctum'], function(){

    /*
    |--------------------------------------------------------------------------
    | Markdown Pages
    |--------------------------------------------------------------------------
    */
    Route::get('pages/{slug}', 'PageController@show');

    /*
    |--------------------------------------------------------------------------
    | Model Resources
    |--------------------------------------------------------------------------
    */
    Route::resource('users','UserController');
    Route::resource('tokens','TokenController');
    Route::resource('account','AccountController', [
        'only' => ['show', 'update','destroy']
    ]);
});
