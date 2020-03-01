<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     * @throws AuthenticationException
     */
    protected function redirectTo($request)
    {
        if($request->isXmlHttpRequest() || $request->wantsJson()){
            throw new AuthenticationException("UnAuthorized.");
        }
        return RouteServiceProvider::HOME;
    }
}
