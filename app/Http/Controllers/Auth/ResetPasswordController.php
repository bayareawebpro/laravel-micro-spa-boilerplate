<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class ResetPasswordController extends Controller
{
    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Display the password reset view for the given token.
     * If no token is present, display the link request form.
     * @param \Illuminate\Http\Request $request
     * @param string|null $token
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showResetForm(Request $request, $token = null)
    {
        return view('app-spa');
    }

    /**
     * Set the user's password.
     * @param  CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    protected function setUserPassword(CanResetPassword $user, $password)
    {
        $user->setAttribute('password', $password); //Hashed in model.
    }

    /**
     * Get the response for a successful password reset.
     * @param \Illuminate\Http\Request $request
     * @param string $response
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    protected function sendResetResponse(Request $request, $response)
    {
        return response([
            'message' => trans($response)
        ]);
    }

    /**
     * Get the response for a failed password reset.
     * @param \Illuminate\Http\Request $request
     * @param string $response
     * @throws ValidationException
     */
    protected function sendResetFailedResponse(Request $request, $response)
    {
        throw ValidationException::withMessages(['email' => trans($response)]);
    }
}
