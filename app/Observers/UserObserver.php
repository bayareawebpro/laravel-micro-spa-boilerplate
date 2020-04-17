<?php declare(strict_types=1);

namespace App\Observers;

use App\Models\User;
use Illuminate\Support\Facades\Cache;

class UserObserver
{
    /**
     * Handle the user "created" event.
     * @param User $user
     * @return void
     */
    public function created(User $user): void
    {
        //
    }

    /**
     * Handle the user "updated" event.
     * @param User $user
     * @return void
     */
    public function updated(User $user): void
    {
        //
    }

    /**
     * Handle the user "deleted" event.
     * @param User $user
     * @return void
     */
    public function deleted(User $user): void
    {
        $user->tokens()->delete();
        Cache::forget('sanctum:abilities');
    }

    /**
     * Handle the user "restored" event.
     * @param User $user
     * @return void
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the user "force deleted" event.
     * @param User $user
     * @return void
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
