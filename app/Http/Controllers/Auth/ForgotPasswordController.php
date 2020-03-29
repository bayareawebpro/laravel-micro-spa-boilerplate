<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ForgotPasswordController extends Controller
{
    use SendsPasswordResetEmails;

    /**
     * Display the form to request a password reset link.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function showLinkRequestForm()
    {
        return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Get the response for a successful password reset link.
     * @param Request $request
     * @param string $response
     * @return \Illuminate\Http\Response
     */
    protected function sendResetLinkResponse(Request $request, $response)
    {
        return response([
            'message' => trans($response),
            'sent' => true,
        ]);
    }

    /**
     * Get the response for a failed password reset link.
     * @param \Illuminate\Http\Request $request
     * @param string $response
     * @throws ValidationException
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        throw ValidationException::withMessages(['email' => trans($response)]);
    }
}
