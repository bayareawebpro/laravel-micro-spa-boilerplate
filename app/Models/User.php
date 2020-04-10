<?php

namespace App\Models;

use App\Services\UserRoles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $attributes = [
        'role' => 'user',
    ];

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Fill the password attribute.
     * @param string $value
     * @return void
     */
    public function setPasswordAttribute(?string $value = null)
    {
        if (!empty($value)) {
            $this->attributes['password'] = Hash::make($value);
        }
    }

    /**
     * Does the user have a specific role.
     * @param string ...$roles
     * @return bool
     */
    public function isRole(...$roles): bool
    {
        return in_array($this->role, $roles);
    }

    /**
     * Grant the user a specific role.
     * @param string $role
     * @return self
     */
    public function grantRole(string $role): self
    {
        $this->attributes['role'] = $role;
        return $this;
    }
}
