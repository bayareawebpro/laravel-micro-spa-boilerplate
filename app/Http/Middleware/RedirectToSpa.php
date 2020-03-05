<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;

class RedirectToSpa
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
//        if($request->isXmlHttpRequest() || $request->wantsJson()){
//            return $next($request);
//        }
//        return redirect(RouteServiceProvider::HOME);
    }
}
