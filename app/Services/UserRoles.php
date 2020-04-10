<?php declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Collection;

class UserRoles
{
    public static function all(): Collection
    {
        return Collection::make(config('roles.all', []));
    }

    public static function values(): Collection
    {
        return static::all()->pluck('value');
    }

    public static function exists(string $role): bool
    {
        return (bool) static::all()->where('value', $role)->count();
    }
}
