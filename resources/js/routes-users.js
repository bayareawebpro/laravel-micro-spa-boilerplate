"use strict";

import Route from "./Services/Router/VueRoute"

/**
 * User Resource
 */
export default [
    Route
        .to('users.index','/users')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersResource"))
        .uses('UserResource@index')
        .middleware('auth'),
    Route
        .to('users.create','/users/create')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersForm"))
        .uses('UserResource@create')
        .middleware('auth'),
    Route
        .to('users.show','/users/:id(\\d+)')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersShow"))
        .uses('UserResource@show')
        .middleware('auth'),
    Route
        .to('users.edit','/users/:id(\\d+)/edit')
        .view(()=>import(/*webpackChunkName:"users"*/ "@views/users/UsersForm"))
        .uses('UserResource@edit')
        .middleware('auth'),
]
