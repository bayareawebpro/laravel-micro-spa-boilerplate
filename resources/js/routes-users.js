"use strict";

import Route from "./Services/Router/VueRoute"

export default [
    Route
        .group('/users', ()=>import(/*webpackChunkName:"users"*/ "@views/users/Layout"), [
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
        .withProps({
            title: 'Users',
            subtitle: 'Resource',
        })
]
