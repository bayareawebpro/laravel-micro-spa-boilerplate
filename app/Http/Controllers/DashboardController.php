<?php

namespace App\Http\Controllers;

use App\Services\AppPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
    public function show(Request $request){
        return response([
            'request' =>AppPermissions::all()
        ]);
    }
}
