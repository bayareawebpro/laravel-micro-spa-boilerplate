<?php

namespace App\Rules;

use App\Services\UserRoles;
use Illuminate\Contracts\Validation\Rule;

class RoleExists implements Rule
{
    /**
     * Create a new rule instance.
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return UserRoles::exists($value);
    }

    /**
     * Get the validation error message.
     * @return string
     */
    public function message()
    {
        return 'The specified role does not exist.';
    }
}
