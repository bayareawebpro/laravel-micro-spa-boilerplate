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
    }

    /**
     * Register any application services
     * @return void
     */
    register() {
        const Bus = new Vue;
        this.app.bind('Events',() => Bus)
        this.app.setInstance('Events',Bus)

        // Load all listeners...
        this.app.make('AutoLoader')
            .context(require.context('@listeners', true, /\.js$/))
            .each((alias, abstract)=>{
                // Bind listeners as factory constructors (false)
                this.app.bind(alias, abstract,false)

                // Make the event bus & Listen for events using the class name or event name.
                // Try to handle the payload or call the failed method.
                Bus.$on((abstract.event || alias), (payload)=>{
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
            'UnAuthenticated',
            'Authenticated',
            'UnAuthorized',
            'Events',
        ]
    }
}
