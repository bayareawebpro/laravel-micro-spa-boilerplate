"use strict";

import Route from "./Services/Router/VueRoute"

/**
 * User Resource
 */
export default [
    /**
     * Auth / Account
     */
    Route
        .group('/users')
        .withProps({
            title: 'Users',
            subtitle: 'Resource',
        })
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/Layout"))
        .group([
            Route
                .to('users.index','/users')
                .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/Resource"))
                .uses('UserResource@index')
                .middleware('auth'),
            Route
                .to('users.create','/users/create')
                .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/Edit"))
                .uses('UserResource@create')
                .middleware('auth'),
            Route
                .to('users.show','/users/:id(\\d+)')
                .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/Show"))
                .uses('UserResource@show')
                .middleware('auth'),
            Route
                .to('users.edit','/users/:id(\\d+)/edit')
                .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/Edit"))
                .uses('UserResource@edit')
                .middleware('auth'),
        ])
]
