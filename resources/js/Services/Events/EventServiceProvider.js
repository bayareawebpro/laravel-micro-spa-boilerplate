import Vue from 'vue'
import {ServiceProvider} from "laravel-micro.js"
export default class EventServiceProvider extends ServiceProvider{

    /**
     * Event Service Provider
     * Deferred is required for this provider.
     * @param app
     */
    constructor(app) {
        super(app);
        this.deferred = false
    }

    /**
     * Register any application services
     * @return void
     */
    register() {
        this.app.bind('Events',(Vue) => new Vue)
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
            'Authenticated',
            'Exception',
            'Invalid',
            'NoConnection',
            'NotFound',
            'SessionExpired',
            'UnAuthenticated',
            'UnAuthorized',
            'UnAuthenticated',
            'Events',
        ]
    }
}
