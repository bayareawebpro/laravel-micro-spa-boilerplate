<?php

use Illuminate\Support\Facades\{App, Route};
use Illuminate\Validation\ValidationException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

if(App::environment('local')){
    Route::any('errors/500',fn()=>abort(500, 'Server Error'));
    Route::any('errors/401',fn()=>abort(401, 'UnAuthenticated'));
    Route::any('errors/403',fn()=>abort(403, 'UnAuthorized / Forbidden'));
    Route::any('errors/404',fn()=>abort(404, 'Not Found'));
    Route::any('errors/419',fn()=>abort(419, 'Session Expired'));
    Route::any('errors/422',function(){
        throw ValidationException::withMessages([
            'field' => ['message1','message2']
        ]);
    });
}

Route::any('screen/{method?}', 'Screens\SettingsScreen');

Route::group(['middleware' => 'auth:airlock'], function(){

    Route::get('pages/{slug}', 'PageController@show');
    Route::resource('users','UserController');
    Route::resource('tokens','TokenController');
    Route::resource('account','AccountController', [
        'only' => ['show', 'update','destroy']
    ]);
});
