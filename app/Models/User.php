<?php

namespace App\Models;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Laravel\Airlock\HasApiTokens;
use Illuminate\Notifications\Notifiable;

use App\Models\Contracts\Validateable;
use Illuminate\Validation\Rule;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements Validateable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The default attribute values.
     * @var array
     */
    protected $attributes = [
        'role' => 'guest',
    ];

    /**
     * Does the user have a specific role.
     * @param string ...$role
     * @return bool
     */
    public function isRole(...$role): bool
    {
        return in_array($this->role, $role);
    }

    /**
     * Grant the user a specific role.
     * @param string $role
     * @return bool
     */
    public function grantRole($role): bool
    {
        $this->setAttribute('role',$role);
        return $this->save();
    }

    /**
     * Get all the user roles in use.
     * @return Collection
     */
    public static function allRoles(): Collection
    {
        return Cache::remember('user:roles', 120, fn()=>static::query()
            ->pluck('role')
            ->unique()
            ->values());
    }

    /**
     * Clear the relevant cached attributes.
     * @return Collection
     */
    public static function boot(): void
    {
        parent::boot();
        static::saved(fn()=>Cache::forget('user:roles'));
        static::deleted(fn()=>Cache::forget('user:roles'));
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
            'password'              => ['required', 'string', 'min:8', 'confirmed'],
            'password_confirmation' => ['required', 'string', 'min:8'],
            'email'                 => [
                'required', 'string', 'email', 'max:255', Rule::unique('users')->ignore(optional($user)->id)
            ],
        ];
    }
}
