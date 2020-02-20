<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     * @param User $user
     * @return bool
     */
    public function viewAny(User $user): bool
    {
        return $user->isRole('admin') || $user->tokenCan('users:viewAny');
    }

    /**
     * Determine whether the user can view the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function view(User $user, User $model): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('users:view')
            || $user->is($model);
    }

    /**
     * Determine whether the user can create models.
     * @param User $user
     * @return bool
     */
    public function create(User $user): bool
    {
        return $user->isRole('admin') || $user->tokenCan('users:create');
    }

    /**
     * Determine whether the user can update the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function update(User $user, User $model): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('users:update')
            || $user->is($model);
    }

    /**
     * Determine whether the user can delete the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function delete(User $user, User $model): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('users:delete')
            || $user->is($model);
    }

    /**
     * Determine whether the user can restore the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function restore(User $user, User $model): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('users:restore')
            || $user->is($model);
    }

    /**
     * Determine whether the user can permanently delete the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function forceDelete(User $user, User $model): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('users:forceDelete')
            || $user->is($model);
    }
}
