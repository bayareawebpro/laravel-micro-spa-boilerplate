import {ServiceProvider} from 'laravel-micro.js'
import Request from '../Router/Request'
import Routes from "../../Routes"
import Router from './Router'
import Route from './Route'

import VueRouter from 'vue-router'
import Vue from 'vue'

export default class RouteServiceProvider extends ServiceProvider {

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

        /**
         * Vue Router
         */
        this.app.bind('Router', ()=>{
            const router = new VueRouter({
                ...Router, routes: Routes
            })
            router.beforeEach(this.app.dispatch.bind(this.app))
            router.afterEach(this.app.terminate.bind(this.app))
            return router
        })

        /**
         * Route Middleware
         */
        this.app.bind('Middleware', () => {
            return this.app
                .make('AutoLoader')
                .context(require.context('@middleware', true, /\.js$/))
                .toObjectEntries()
        })

        /**
         * Route / Link Builder
         */
        Route.setErrorHandler((e)=>console.warn(e))
        this.app.bind('Route', ()=>Route)

        /**
         * Route Builder
         */
        this.app.bind('Request', (Vue)=>{
            return Vue.observable(this.app.build(Request))
        })
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
            'Router',
            'Request',
            'Response',
            'Middleware',
        ]
    }
}
