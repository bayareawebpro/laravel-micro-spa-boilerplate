"use strict";
import Routes from '../../routes'
import Request from './Request'
import Route from './Route'
import Vue from 'vue'
import VueRouter from 'vue-router'
import scrollBehavior from './scrollBehavior'
import {ServiceProvider} from 'laravel-micro.js'

export default class RouterServiceProvider extends ServiceProvider {

    /**
     * Register any application services
     * @return void
     */
    register() {
        this.registerDependants()
        this.registerBindings()
    }

    /**
     * 3rd Party Plugins
     * @return void
     */
    registerDependants() {
        Vue.use(VueRouter)
    }

    /**
     * Primary Bindings
     * @return void
     */
    registerBindings() {
        this.app.bind('Route', ()=>Route)

        this.app.bind('Request', (Vue)=>{
            return Vue.observable(this.app.build(Request))
        })

        this.app.bind('Router', ()=>{
            const router = new VueRouter({
                mode: 'history',
                routes: Routes,
                scrollBehavior,
            })
            router.beforeEach(this.app.dispatch.bind(this.app))
            router.afterEach(this.app.terminate.bind(this.app))
            return router
        })

        this.app.bind('Middleware', () => this.app
            .make('AutoLoader')
            .context(require.context('@middleware', true, /\.js$/))
            .toObjectEntries()
        )
    }

    /**
     * Boot any application services
     * @return void
     */
    boot() {

    }

    /**
     * Declare the aliases for the provided services
     * @return {Array}
     */
    get provides() {
        return [
            'Route',
            'Router',
            'Request',
            'Middleware',
        ]
    }
}
