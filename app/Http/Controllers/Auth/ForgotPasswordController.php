<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ForgotPasswordController extends Controller
{
    use SendsPasswordResetEmails;


    /**
     * Get the response for a successful password reset link.
     * @param Request $request
     * @param string $response
     * @return \Illuminate\Http\Response
     */
    protected function sendResetLinkResponse(Request $request, $response)
    {
        return response([
            'message' => trans($response)
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
