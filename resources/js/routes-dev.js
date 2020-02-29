"use strict";

import Route from "./Services/Router/VueRoute"

export default [
    Route
        .group('/developer')
        .view(()=>import(/*webpackChunkName:"dashboard"*/ "@views/developer/Layout"))
        .withProps({
            title: 'Developer',
            subtitle: 'Application Status',
        })
        .group([
            Route
                .to('framework.permissions','/developer/framework/permissions')
                .view(()=>import(/*webpackChunkName:"framework"*/ "@views/developer/framework/Permissions"))
                .middleware('auth'),
            Route
                .to('framework.bindings','/developer/framework/bindings')
                .view(()=>import(/*webpackChunkName:"framework"*/ "@views/developer/framework/Bindings"))
                .middleware('auth'),
            Route
                .to('framework.providers','/developer/framework/providers')
                .view(()=>import(/*webpackChunkName:"framework"*/ "@views/developer/framework/Providers"))
                .middleware('auth'),
            Route
                .to('framework.sharing','/developer/framework/sharing')
                .view(()=>import(/*webpackChunkName:"framework"*/ "@views/developer/framework/Sharing"))
                .middleware('auth'),
            Route
                .to('framework.logs','/developer/framework/logs')
                .view(()=>import(/*webpackChunkName:"framework"*/ "@views/developer/framework/Logs"))
                .middleware('auth'),
        ]),

        Route
            .group('/developer/kitchensink')
            .withProps({
                title: 'Developer',
                subtitle: 'Design Patterns',
            })
            .view(()=>import(/*webpackChunkName:"dashboard"*/ "@views/developer/Layout"))
            .group([
            Route
                .to('kitchensink.badges','/developer/kitchensink/badges')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Badges"))
                .middleware('auth'),
            Route
                .to('kitchensink.tabs','/developer/kitchensink/tabs')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Tabs"))
                .middleware('auth'),
            Route
                .to('kitchensink.cards','/developer/kitchensink/cards')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Cards"))
                .middleware('auth'),
            Route
                .to('kitchensink.collapse','/developer/kitchensink/collapse')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Collapse"))
                .middleware('auth'),
            Route
                .to('kitchensink.actions','/developer/kitchensink/actions')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Actions"))
                .middleware('auth'),
            Route
                .to('kitchensink.typography','/developer/kitchensink/typography')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Typography"))
                .middleware('auth'),
            Route
                .to('kitchensink.forms','/developer/kitchensink/forms')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Forms"))
                .middleware('auth'),
            Route
                .to('kitchensink.files','/developer/kitchensink/files')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Files"))
                .middleware('auth'),
            Route
                .to('kitchensink.modals','/developer/kitchensink/modals')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Modals"))
                .middleware('auth'),
            Route
                .to('kitchensink.charts','/developer/kitchensink/charts')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Charts"))
                .middleware('auth'),
            Route
                .to('kitchensink.charts','/developer/kitchensink/charts')
                .view(()=>import(/*webpackChunkName:"kitchensink"*/ "@views/developer/kitchensink/Charts"))
                .middleware('auth'),
        ]),
]
