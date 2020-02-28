<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Attachment;
use Illuminate\Auth\Access\HandlesAuthorization;

class AttachmentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any tokens.
     * @param User $user
     * @return bool
     */
    public function viewAny(User $user): bool
    {
        return $user->isRole('admin') || $user->tokenCan('attachments:viewAny');
    }

    /**
     * Determine whether the user can view the token.
     * @param User $user
     * @param Attachment $attachment
     * @return bool
     */
    public function view(User $user, Attachment $attachment): bool
    {
        return $user->isRole('admin')
            || ($user->is($attachment->user) && $user->tokenCan('attachments:view'));
    }

    /**
     * Determine whether the user can create tokens.
     * @param User $user
     * @return bool
     */
    public function create(User $user): bool
    {
        return $user->isRole('admin')
            || $user->tokenCan('attachments:create');
    }

    /**
     * Determine whether the user can update the token.
     * @param User $user
     * @param Attachment $attachment
     * @return bool
     */
    public function update(User $user, Attachment $attachment): bool
    {
        return $user->isRole('admin')
            || ($user->is($attachment->user) && $user->tokenCan('attachments:update'));
    }

    /**
     * Determine whether the user can delete the token.
     * @param User $user
     * @param Attachment $attachment
     * @return bool
     */
    public function delete(User $user, Attachment $attachment): bool
    {
        return $user->isRole('admin')
            || ($user->is($attachment->user) && $user->tokenCan('attachments:delete'));
    }

    /**
     * Determine whether the user can restore the token.
     * @param User $user
     * @param Attachment $attachment
     * @return bool
     */
    public function restore(User $user, Attachment $attachment): bool
    {
        return $user->isRole('admin')
            || ($user->is($attachment->user) && $user->tokenCan('attachments:restore'));
    }

    /**
     * Determine whether the user can permanently delete the token.
     * @param User $user
     * @param Attachment $attachment
     * @return bool
     */
    public function forceDelete(User $user, Attachment $attachment): bool
    {
        return $user->isRole('admin')
            || ($user->is($attachment->user) && $user->tokenCan('attachments:forceDelete'));
    }
}
