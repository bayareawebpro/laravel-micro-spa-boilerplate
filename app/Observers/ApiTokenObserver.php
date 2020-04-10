<?php

namespace App\Observers;

use App\Models\ApiToken;
use Illuminate\Support\Facades\Cache;

class ApiTokenObserver
{
    /**
     * Handle the api token "created" event.
     * @param ApiToken $apiToken
     * @return void
     */
    public function created(ApiToken $apiToken): void
    {
        //
    }

    /**
     * Handle the api token "updated" event.
     * @param ApiToken $apiToken
     * @return void
     */
    public function updated(ApiToken $apiToken): void
    {
        Cache::forget('airlock:abilities');
    }

    /**
     * Handle the api token "deleted" event.
     * @param ApiToken $apiToken
     * @return void
     */
    public function deleted(ApiToken $apiToken): void
    {
        Cache::forget('airlock:abilities');
    }

    /**
     * Handle the api token "restored" event.
     * @param ApiToken $apiToken
     * @return void
     */
    public function restored(ApiToken $apiToken): void
    {
        //
    }

    /**
     * Handle the api token "force deleted" event.
     * @param ApiToken $apiToken
     * @return void
     */
    public function forceDeleted(ApiToken $apiToken): void
    {
        //
    }
}
