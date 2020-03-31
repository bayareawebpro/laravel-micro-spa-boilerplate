<?php declare(strict_types=1);

namespace App\Composers;

use App\Models\User;
use App\Services\AppPermissions;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class AppComposer
{
    protected Request $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function compose(View $view)
    {
        $view->with('user', $this->request->user());

        $view->with('appState', Collection::make(Config::get('spa'))->merge([
            'environment' => config('app.env'),
            'permissions' => AppPermissions::all(),
            'roles'       => User::allRoles(),
            'assets'      => $this->assets(),
            'version'     => $this->version(),
        ]));
    }

    protected function version(): string
    {
        return md5_file(public_path('mix-manifest.json'));
    }

    protected function assets(): Collection
    {
        return Collection::make(json_decode(file_get_contents(public_path('mix-manifest.json'))))
            ->filter(fn($entry) => !Str::contains($entry, 'worker.js'))
            ->map(function ($entry, $index) {
                return [
                    'url'  => $entry,
                    'type' => pathinfo($index, PATHINFO_EXTENSION),
                ];
            });
    }
}
