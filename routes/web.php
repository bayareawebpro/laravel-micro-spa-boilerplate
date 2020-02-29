<?php
use Illuminate\Support\Facades\{Route, Auth};

Auth::routes();

// SPA Landing Page
Route::view('basic', 'app')
    ->where('slug', '^(?!api|dashboard).*?$')
    ->name('spa');

Route::view('{slug?}', 'app-spa')
    ->where('slug', '^(?!api).*?$')
    ->name('app');
