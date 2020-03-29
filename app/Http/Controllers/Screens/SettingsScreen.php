<?php declare(strict_types=1);
namespace App\Http\Controllers\Screens;

use Illuminate\Http\Request;

class SettingsScreen extends Screen {

    public array $settings = ['key' => 'value'];

    /**
     * @param Request $request
     */
    public function test(Request $request)
    {

    }
}
