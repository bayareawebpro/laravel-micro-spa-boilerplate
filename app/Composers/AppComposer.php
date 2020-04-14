<?php declare(strict_types=1);

namespace App\Composers;

use App\Services\{UserRoles, AppPermissions};

use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\{Facades\Config, Collection};

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
            'version'     => $this->version(),
            'environment' => config('app.env'),
            'roles'       => UserRoles::all(),
            'permissions' => AppPermissions::without(['viewTelescope']),
        ]));
    }

    protected function version(): string
    {
        return md5_file(public_path('mix-manifest.json'));
    }
}
