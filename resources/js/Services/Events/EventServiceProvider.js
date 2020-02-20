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
        this.app.bind('Events',() => new Vue)
    }

    /**
     * Boot any application services
     * @return void
     */
    boot() {

        // Make the event bus.
        const Events = this.app.make('Events')

        // Load all listeners...
        this.app
            .make('AutoLoader')
            .context(require.context('@listeners', true, /\.js$/))
            .each((alias, abstract)=>{

                // Bind listeners as factory constructors (false)
                this.app.bind(alias, abstract,false)

                // Listen for events using the class name or event name.
                // Try to handle the payload or call the failed method.
                Events.$on((alias || abstract.event), (payload)=>{
                    try{
                        if(this.app.isBound(alias)){
                            const listener = this.app.make(alias)
                            try{
                                listener.handle(payload)
                            }catch (e) {
                                listener.failed(e)
                            }
                        }
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
            'UnAuthenticated',
            'Authenticated',
            'UnAuthorized',
            'Events',
        ]
    }
}
