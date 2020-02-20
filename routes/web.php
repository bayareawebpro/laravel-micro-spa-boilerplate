<?php
use Illuminate\Support\Facades\{Route, Auth};

Auth::routes();

// SPA Landing Page
Route::view('{slug?}', 'app')
    ->where('slug', '^(?!api|dashboard).*?$')
    ->name('app');
