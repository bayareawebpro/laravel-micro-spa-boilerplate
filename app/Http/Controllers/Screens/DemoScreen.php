<?php declare(strict_types=1);

namespace App\Http\Controllers\Screens;

use Illuminate\Http\Request;

class DemoScreen extends Screen {

    public array $settings = ['key' => 'value'];

    public function test(Request $request)
    {
        // Modify State
    }
}
