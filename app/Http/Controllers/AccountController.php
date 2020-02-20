<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AccountController extends Controller
{
    /**
     * Current User.
     * @param Request $request
     * @return Response
     */
    public function show(Request $request): Response
    {
        return response([
            'entity' => $request->user(),
        ]);
    }
}
