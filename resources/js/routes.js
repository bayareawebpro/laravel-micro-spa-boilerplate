"use strict";

import Route from "./Services/Router/VueRoute"

export default [
    Route
        .to('home','/')
        .view(()=>import(/*webpackChunkName:"home"*/ "@views/home/Home")),
    Route
        .group('/dashboard')
        .view(()=>import(/*webpackChunkName:"dashboard"*/ "@views/dashboard/Dashboard"))
        .group([
            Route
                .to('dashboard','/dashboard')
                .view(()=>import(/*webpackChunkName:"dashboard"*/ "@views/dashboard/Main"))
                .uses('Dashboard@show')
                .middleware('auth'),
        ]),
    ...require('./routes-tokens').default,
    ...require('./routes-users').default,
    ...require('./routes-auth').default,
    ...require('./routes-dev').default,
    ...require('./routes-errors').default,
]
