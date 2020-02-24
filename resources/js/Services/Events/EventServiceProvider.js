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
        const Events = new Vue
        this.app.bind('Events',() => Events)
        this.app.setInstance('Events',Events)
    }

    /**
     * Boot any application services
     * Bind listeners as factory constructors
     * @return void
     */
    boot() {
        const Events = this.app.getInstance('Events')
        this.app
            .make('AutoLoader')
            .context(require.context('@listeners', true, /\.js$/))
            .each((alias, abstract)=>{
                this.app.bind(alias, abstract,false)
                Events.$on((abstract.event || alias), (payload)=>{
                    try{
                        this.app.make(alias).handle(payload)
                    }catch (e) {
                        this.app.handleError(e)
                    }
                })
            })
    }

    /**
     * Declare the aliases for the provided services
     * @return {Array}
     */
    get provides() {
        return [
            'Events',
        ]
    }
}
