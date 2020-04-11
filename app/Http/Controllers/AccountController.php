<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\UserRequest;

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

    /**
     * Update the specified resource in storage.
     * @param UserRequest $request
     * @param User $user
     * @return Response
     */
    public function update(UserRequest $request, User $user)
    {
        $user->update($request->validated());

        return response([
            'message' => 'Account Updated',
            'entity'  => $user,
        ]);
    }
}
