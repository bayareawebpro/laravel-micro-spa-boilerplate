<?php
use Illuminate\Support\Facades\{Route, Auth};

//Auth::routes();
//
//
//// Authentication Routes...
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('register', 'Auth\RegisterController@register');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

Route::view('{slug?}', 'app-spa')
    ->where('slug', '^(?!api).*?$')
    ->name('spa');
