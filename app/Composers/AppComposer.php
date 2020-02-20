<?php declare(strict_types=1);

namespace App\Composers;

use Illuminate\Contracts\Config\Repository as Config;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\View\View;

class AppComposer
{
    protected Request $request;
    protected Config $config;

    public function __construct(Request $request, Config $config)
    {
        $this->request = $request;
        $this->config = $config;
    }

    public function compose(View $view)
    {
        $view->with('appState', Collection::make([
            'user' => $this->request->user(),
            'config' => $this->config->get('spa'),
        ]));
    }
}
