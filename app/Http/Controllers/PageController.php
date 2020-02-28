<?php

namespace App\Http\Controllers;

use App\Services\Markdown;

class PageController extends Controller
{
    public function show($slug){
        return response([
            $slug => Markdown::parse($slug)
        ]);
    }
}
