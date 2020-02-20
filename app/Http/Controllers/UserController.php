<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

use App\Http\Resources\Searchable\UserSearchable;
use BayAreaWebPro\SearchableResource\SearchableResource;

class UserController extends Controller
{
    /**
     * UserController constructor.
     */
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return SearchableResource
     */
    public function index(Request $request)
    {
        return SearchableResource::make(User::query())->tap(new UserSearchable);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return response([
            'entity' => tap(new User)->toArray(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $request->validate(User::validationRules());
        return response([
            'entity' => User::query()->create(array_merge($request->except('password'), [
                'password' => Hash::make($request->get('password')),
            ])),
        ]);
    }

    /**
     * Display the specified resource.
     * @param User $user
     * @return Response
     */
    public function show(User $user)
    {
        return response([
            'entity' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param User $user
     * @return Response
     */
    public function edit(User $user)
    {
        return response([
            'entity' => $user,
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
        $request->validate(User::validationRules($user));

        $user->update(array_merge($request->except('password'), [
            'password' => Hash::make($request->get('password')),
        ]));

        return response([
            'message' => 'Entity Updated',
            'entity'  => $user,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * @param Request $request
     * @param User $user
     * @return Response
     * @throws \Exception
     */
    public function destroy(Request $request, User $user)
    {
        $user->delete();
        return response([
            'message' => 'Entity Destroyed',
            'entity'  => $user->only('id'),
        ]);
    }
}
