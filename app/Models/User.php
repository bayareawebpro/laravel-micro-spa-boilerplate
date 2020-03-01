<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Collection;

use Laravel\Airlock\HasApiTokens;
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
        if(!empty($value)){
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
    public function grantRole($role): self
    {
        $this->setAttribute('role', $role);
        return $this;
    }

    /**
     * Get all the user roles in use.
     * @return Collection
     */
    public static function allRoles(): Collection
    {
        return Collection::make([
            ['label' => 'Administrator', 'value' => 'admin'],
            ['label' => 'User', 'value' => 'user'],
        ]);
    }

    /**
     * The validation rules for an entity.
     * @param User|null $user
     * @return array
     */
    public static function validationRules(?User $user = null): array
    {
        return [
            'name'                  => ['required', 'string', 'max:255'],
            'password'              => ['sometimes', 'required', 'string', 'min:8', 'confirmed'],
            'password_confirmation' => ['sometimes', 'required', 'string', 'min:8'],
            'role'                  => ['sometimes', 'required', Rule::in(static::allRoles()->pluck('value')->toArray())],
            'email'                 => [
                'required', 'string', 'email', 'max:255',
                Rule::unique('users')->ignore(optional($user)->id),
            ],
        ];
    }

    public static function boot()
    {
        parent::boot();
        static::deleting(fn(User $user)=>$user->tokens()->delete());
    }
}
