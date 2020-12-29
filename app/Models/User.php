<?php namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, HasFactory;

    /**
     * Default Attributes
     * @var array
     */
    protected $attributes = [
        'role' => 'user',
    ];

    /**
     * Fillable Attributes
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * Hidden Attributes
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Casted Attributes
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Fill the password attribute.
     * @param string|null $value
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
