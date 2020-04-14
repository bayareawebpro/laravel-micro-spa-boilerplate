"use strict";

import Route from "../Services/Router/VueRoute"

export default [
    Route
        .group('/developer',()=>import(/*webpackChunkName:"developer"*/ "@views/developer/Layout"), [
            Route
                .to('framework.permissions','/developer/framework/permissions')
                .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/framework/Permissions"))
                .middleware('auth'),
            Route
                .to('framework.bindings','/developer/framework/bindings')
                .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/framework/Bindings"))
                .middleware('auth'),
            Route
                .to('framework.providers','/developer/framework/providers')
                .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/framework/Providers"))
                .middleware('auth'),
            Route
                .to('framework.sharing','/developer/framework/sharing')
                .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/framework/Sharing"))
                .middleware('auth'),
            Route
                .to('framework.logs','/developer/framework/logs')
                .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/framework/Logs"))
                .middleware('auth'),
        ])
        .withProps({
            title: 'Developer',
            subtitle: 'Application Status',
        }),

        Route
            .group('/developer/kitchensink', ()=>import(/*webpackChunkName:"developer"*/ "@views/developer/Layout"), [
                Route
                    .to('kitchensink.badges','/developer/kitchensink/badges')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Badges"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.tabs','/developer/kitchensink/tabs')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Tabs"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.cards','/developer/kitchensink/cards')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Cards"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.collapse','/developer/kitchensink/collapse')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Collapse"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.actions','/developer/kitchensink/actions')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Actions"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.typography','/developer/kitchensink/typography')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Typography"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.forms','/developer/kitchensink/forms')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Forms"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.pages','/developer/kitchensink/pages')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Pages"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.media','/developer/kitchensink/media')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Media"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.modals','/developer/kitchensink/modals')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Modals"))
                    .middleware('auth'),
                Route
                    .to('kitchensink.charts','/developer/kitchensink/charts')
                    .view(()=>import(/*webpackChunkName:"developer"*/ "@views/developer/kitchensink/Charts"))
                    .middleware('auth'),
            ])
            .withProps({
                title: 'Developer',
                subtitle: 'Design Patterns',
            })
]
