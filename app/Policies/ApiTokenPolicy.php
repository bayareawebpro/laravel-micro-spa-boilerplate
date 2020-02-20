<?php

namespace App\Policies;

use App\Models\User;
use App\Models\ApiToken;
use Illuminate\Auth\Access\HandlesAuthorization;

class ApiTokenPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any tokens.
     * @param User $user
     * @return bool
     */
    public function viewAny(User $user): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('tokens:viewAny');
    }

    /**
     * Determine whether the user can view the token.
     * @param User $user
     * @param ApiToken $token
     * @return bool
     */
    public function view(User $user, ApiToken $token): bool
    {
        return $user->isRole('admin')
            || ($user->is($token->tokenable) && $user->tokenCan('tokens:view'));
    }

    /**
     * Determine whether the user can create tokens.
     * @param User $user
     * @return bool
     */
    public function create(User $user): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('tokens:create');
    }

    /**
     * Determine whether the user can update the token.
     * @param User $user
     * @param ApiToken $token
     * @return bool
     */
    public function update(User $user, ApiToken $token): bool
    {
        return $user->isRole('admin')
            || ($user->is($token->tokenable) && $user->tokenCan('tokens:update'));
    }

    /**
     * Determine whether the user can delete the token.
     * @param User $user
     * @param ApiToken $token
     * @return bool
     */
    public function delete(User $user, ApiToken $token): bool
    {
        return $user->isRole('admin')
            || ($user->is($token->tokenable) && $user->tokenCan('tokens:delete'));
    }

    /**
     * Determine whether the user can restore the token.
     * @param User $user
     * @param ApiToken $token
     * @return bool
     */
    public function restore(User $user, ApiToken $token): bool
    {
        return $user->isRole('admin')
            || ($user->is($token->tokenable) && $user->tokenCan('tokens:restore'));
    }

    /**
     * Determine whether the user can permanently delete the token.
     * @param User $user
     * @param ApiToken $token
     * @return bool
     */
    public function forceDelete(User $user, ApiToken $token): bool
    {
        return $user->isRole('admin')
            || ($user->is($token->tokenable) && $user->tokenCan('tokens:forceDelete'));
    }
}
