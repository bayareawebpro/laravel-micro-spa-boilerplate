<?php declare(strict_types=1);

namespace App\Composers;

use App\Models\User;
use App\Services\AppPermissions;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
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
            'version'     => $this->version(),
        ]));
    }

    protected function version(): string
    {
        return md5_file(public_path('mix-manifest.json'));
    }
}
