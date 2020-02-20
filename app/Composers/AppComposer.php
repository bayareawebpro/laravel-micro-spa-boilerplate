<?php declare(strict_types=1);

namespace App\Composers;

use Illuminate\Support\Collection;
use Illuminate\View\View;

class AppComposer
{
    public function __construct()
    {
    }

    public function compose(View $view)
    {
        $view->with('config', Collection::make([
            'key' => 'value'
        ]));
    }
}
