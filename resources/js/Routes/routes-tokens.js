"use strict";

import Route from "../Services/Router/VueRoute"

export default [
    Route
        .group('/tokens', ()=>import(/*webpackChunkName:"tokens"*/ "@views/tokens/Layout"), [
            Route
                .to('tokens.index', '/tokens')
                .view(() => import(/*webpackChunkName:"tokens"*/ "@views/tokens/Resource"))
                //.uses('TokenResource@index')
                .middleware('auth'),
            Route
                .to('tokens.create', '/tokens/create')
                .view(() => import(/*webpackChunkName:"tokens"*/ "@views/tokens/Edit"))
                .uses('TokenResource@create')
                .middleware('auth'),
            Route
                .to('tokens.show', '/tokens/:id(\\d+)')
                .view(() => import(/*webpackChunkName:"tokens"*/ "@views/tokens/Show"))
                .uses('TokenResource@show')
                .middleware('auth'),
            Route
                .to('tokens.edit', '/tokens/:id(\\d+)/edit')
                .view(() => import(/*webpackChunkName:"tokens"*/ "@views/tokens/Edit"))
                .uses('TokenResource@edit')
                .middleware('auth'),
        ])
        .withProps({
            title: 'Tokens',
            subtitle: 'Resource',
        })
]
