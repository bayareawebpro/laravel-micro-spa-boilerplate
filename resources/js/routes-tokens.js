"use strict";

import Route from "./Services/Router/VueRoute"

/**
 * Token Resource
 */
export default [
    Route
        .to('tokens.index','/tokens')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenResource"))
        .uses('TokenResource@index')
        .middleware('auth'),
    Route
        .to('tokens.create','/tokens/create')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenForm"))
        .uses('TokenResource@create')
        .middleware('auth'),
    Route
        .to('tokens.show','/tokens/:id(\\d+)')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenShow"))
        .uses('TokenResource@show')
        .middleware('auth'),
    Route
        .to('tokens.edit','/tokens/:id(\\d+)/edit')
        .view(()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/TokenForm"))
        .uses('TokenResource@edit')
        .middleware('auth'),
]
