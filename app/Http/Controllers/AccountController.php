<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

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

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param User $user
     * @return Response
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate(User::validationRules($user));

        $user->update($data);

        return response([
            'message' => 'Account Updated',
            'entity'  => $user,
        ]);
    }
}
