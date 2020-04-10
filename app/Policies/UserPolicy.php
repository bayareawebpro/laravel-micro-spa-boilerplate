<?php declare(strict_types=1);

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
        return $user->isRole('admin');
    }

    /**
     * Determine whether the user can view the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function view(User $user, User $model): bool
    {
        return $user->isRole('admin') || (
            $user->is($model) &&
            $user->tokenCan('users:view')
        );
    }

    /**
     * Determine whether the user can create models.
     * @param User $user
     * @return bool
     */
    public function create(User $user): bool
    {
        return $user->isRole('admin');
    }

    /**
     * Determine whether the user can update other user roles.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function updateRole(User $user, User $model): bool
    {
        return $user->isRole('admin') && $user->isNot($model);
    }

    /**
     * Determine whether the user can update the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function update(User $user, User $model): bool
    {
        return $user->isRole('admin') || (
            $user->is($model) &&
            $user->tokenCan('users:update')
        );
    }

    /**
     * Determine whether the user can delete the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function delete(User $user, User $model): bool
    {
        return $user->isRole('admin') || (
            $user->is($model) &&
            $user->tokenCan('users:delete')
        );
    }

    /**
     * Determine whether the user can restore the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function restore(User $user, User $model): bool
    {
        return $user->isRole('admin') || (
            $user->is($model) &&
            $user->tokenCan('users:restore')
        );
    }

    /**
     * Determine whether the user can permanently delete the model.
     * @param User $user
     * @param User $model
     * @return bool
     */
    public function forceDelete(User $user, User $model): bool
    {
        return $user->isRole('admin') || (
            $user->is($model) &&
            $user->tokenCan('users:forceDelete')
        );
    }
}
