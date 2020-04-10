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
            'environment' => config('app.env'),
            'permissions' => AppPermissions::all(),
            'roles'       => UserRoles::all(),
            'version'     => $this->version(),
        ]));
    }

    protected function version(): string
    {
        return md5_file(public_path('mix-manifest.json'));
    }
}
