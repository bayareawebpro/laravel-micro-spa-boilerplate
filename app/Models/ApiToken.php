<?php

namespace App\Models;

use App\Services\AppPermissions;
use Illuminate\Validation\Rule;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Laravel\Airlock\PersonalAccessToken;

class ApiToken extends PersonalAccessToken
{
    public $table = 'personal_access_tokens';

    /**
     * The validation rules for an entity.
     * @return array
     */
    public static function validationRules(): array
    {
        return [
            'name'        => 'required|string|max:255',
            'abilities'   => 'required|array|min:1',
            'abilities.*' => ['string', Rule::in(AppPermissions::all()->values()->flatten(1)->toArray())],
        ];
    }

    public static function allAbilities(): Collection
    {
        return Cache::remember('airlock:abilities', 120, fn()=>static::query()
            ->pluck('abilities')
            ->flatten(1)
            ->unique()
            ->values());
    }

    public static function boot()
    {
        parent::boot();
        static::saved(fn()=>Cache::forget('airlock:abilities'));
        static::deleted(fn()=>Cache::forget('airlock:abilities'));
    }
}
