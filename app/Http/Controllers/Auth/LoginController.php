<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the application's login form.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function showLoginForm()
    {
        return redirect("/auth/login");
    }


    /**
     * The user has logged out of the application.
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    protected function loggedOut(Request $request)
    {
        return response([
            'message' => 'Session Destroyed',
            'entity' => null
        ]);
    }

    /**
     * The user has been authenticated.
     * @param  \Illuminate\Http\Request  $request
     * @param  Authenticatable $user
     * @return \Illuminate\Http\Response
     */
    protected function authenticated(Request $request, $user)
    {
        return response([
            'message' => 'Session Initialized',
            'entity' => $user
        ]);
    }
}
