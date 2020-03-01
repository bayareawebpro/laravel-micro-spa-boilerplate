<?php

namespace App\Http\Controllers;

use App\Models\ApiToken;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;

use App\Http\Resources\Searchable\TokenSearchable;
use BayAreaWebPro\SearchableResource\SearchableResource;

class TokenController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(ApiToken::class, 'token');
    }

    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return SearchableResource
     */
    public function index(Request $request)
    {
        $query = !$request->user()->isRole('admin')
            ? $request->user()->tokens()->getQuery()
            : ApiToken::query();

        return SearchableResource::make($query->with('tokenable'))->tap(new TokenSearchable);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create(): Response
    {
        return response([
            'entity' => [
                'name' => '',
                'abilities' => [],
            ]
        ]);
    }

    /**
     * Display the specified resource.
     * @param ApiToken $token
     * @return Response
     */
    public function show(ApiToken $token): Response
    {
        return response([
            'entity' => $token
        ]);
    }

    /**
     * Display the specified resource.
     * @param ApiToken $token
     * @return Response
     */
    public function edit(ApiToken $token): Response
    {
        return response([
            'entity' => $token
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     * @throws AuthorizationException|ValidationException
     */
    public function store(Request $request): Response
    {
        $this->authorize('create', [ApiToken::class]);

        $request->validate(ApiToken::validationRules());

        $newAccessToken = $request->user()->createToken(
            $request->get('name'),
            $request->get('abilities')
        );

        return response([
            'message' => 'Entity Created',
            'entity' => array_merge($newAccessToken->accessToken->toArray(), [
                'token' => $newAccessToken->plainTextToken
            ]),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param ApiToken $token
     * @return Response
     */
    public function update(Request $request, ApiToken $token): Response
    {
        $request->validate(ApiToken::validationRules());

        return response([
            'message' => 'Entity Updated',
            'entity' => tap($token)->update($request->only(['name', 'abilities']))
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * @param ApiToken $token
     * @return Response
     * @throws \Exception
     */
    public function destroy(ApiToken $token): Response
    {
        $token->delete();

        return response([
            'message' => 'Entity Destroyed',
            'entity' => $token->only('id')
        ]);
    }
}
