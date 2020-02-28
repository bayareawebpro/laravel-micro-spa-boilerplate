<?php
use Illuminate\Support\Facades\{Route};
use Illuminate\Validation\ValidationException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
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

Route::group(['middleware' => 'auth:airlock'], function(){
    Route::get('dashboard/{section?}', 'DashboardController@show');
    Route::get('pages/{slug}', 'PageController@show');

    Route::resource('account','AccountController', [
        'only' => ['show', 'update','destroy']
    ]);
    Route::resource('attachments','AttachmentController', [
        'only' => ['store', 'destroy']
    ]);
    Route::resource('users','UserController');
    Route::resource('tokens','TokenController');
});
