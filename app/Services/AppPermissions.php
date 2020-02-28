<?php declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Gate;

class AppPermissions{

    public static function all(): Collection
    {
        return Collection::make(Gate::policies())
            ->mapWithKeys(function (string $class) {

                $class = new \ReflectionClass($class);
                $className= Str::plural(str_replace('Policy', '', $class->getShortName()));
                $classSlug= Str::lower($className);

                $list = Collection::make($class->getMethods())
                    ->pluck('name')
                    ->reject(fn($names)=>in_array($names,[
                        'allow', 'deny'
                    ]))
                    ->map(fn($method)=>"{$classSlug}:{$method}")
                    ->sort();

                return [$className => $list->values()];
            })
            ->merge([
                'Abilities' => Collection::make(Gate::abilities())->keys()
            ])
            ->sort();
    }

}
