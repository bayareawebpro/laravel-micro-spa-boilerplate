<?php declare(strict_types=1);

namespace App\Composers;

use App\Models\User;
use Illuminate\Support\Facades\Config;
use App\Services\AppPermissions;
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

        $view->with('appState', Collection::make([
            'title'       => Config::get('app.name'),
            'description' => Config::get('app.name'),
            'permissions' => AppPermissions::all(),
            'environment' => config('app.env'),
            'config'      => Config::get('spa'),
            'roles'       => User::allRoles(),
        ]));
}
}
