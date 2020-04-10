<?php declare(strict_types=1);

namespace App\Http\Controllers\Screens;

use ReflectionClass;
use ReflectionProperty;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Responsable;
use App\Http\Controllers\Controller;

abstract class Screen extends Controller implements Arrayable, Responsable
{
    protected Request $request;

    public function __invoke(Request $request, $method = null)
    {
        $this->authorize(static::class);

        if(method_exists($this,$method)){
            app()->call(static::class.'@'.$method);
        }
        return $this;
    }

    public function toResponse($request)
    {
        $this->request = $request;
        return response($this->toArray());
    }

    public function toArray()
    {
        $props = with(new ReflectionClass($this))
            ->getProperties(ReflectionProperty::IS_PUBLIC);

        return Collection::make($props)
            ->mapWithKeys(fn($entry) => [$entry->name => $this->{$entry->name}])
            ->toArray();
    }
}
