"use strict";

import Route from "../Services/Router/VueRoute"

export default [

    Route
        .to('auth.account','/account/edit')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Account"))
        .uses('Auth@authorize')
        .middleware('auth'),
    Route
        .to('auth.login','/auth/login')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Login"))
        .middleware('guest'),
    Route
        .to('auth.register','/auth/register')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/Register"))
        .middleware('guest'),
    Route
        .to('auth.reset','/auth/reset')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/PasswordReset"))
        .middleware('guest'),
    Route
        .to('auth.forgot','/auth/forgot')
        .view(()=>import(/*webpackChunkName:"auth"*/ "@views/auth/PasswordForgot"))
        .middleware('guest'),
]
