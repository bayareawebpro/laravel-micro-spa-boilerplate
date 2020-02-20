<?php

namespace App\Providers;

use App\Models\ApiToken;
use Laravel\Airlock\Airlock;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     * @var array
     */
    protected $policies = [
        'App\Models\User' => 'App\Policies\UserPolicy',
        'App\Models\ApiToken' => 'App\Policies\ApiTokenPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     * @return void
     */
    public function boot()
    {
        Airlock::usePersonalAccessTokenModel(ApiToken::class);
        $this->registerPolicies();
    }
}
