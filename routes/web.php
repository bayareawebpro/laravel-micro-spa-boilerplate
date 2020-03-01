<?php
use Illuminate\Support\Facades\{Route, Auth};

Route::middleware(['spa'])->group(function(){
    Auth::routes();
});

Route::view('{slug?}', 'app-spa')
    ->where('slug', '^(?!api).*?$')
    ->name('spa');
