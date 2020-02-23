import LaravelMicro from 'laravel-micro.js'
import AutoLoader from "./utilities/AutoLoader"
export default class Application extends LaravelMicro {

    /**
     * Application Constructor
     * @return void
     */
    constructor() {
        super();
        this.setInstance('AutoLoader', AutoLoader)
    }

    /**
     * Dispatch Route Request through Middleware Stack.
     * @return void
     */
    loadProviders() {
        AutoLoader
            .context(require.context('./services', true, /\.*ServiceProvider.js$/))
            .each((name, abstract) =>this.register(abstract))
    }

    /**
     * Dispatch Route Request through Middleware Stack.
     * @return void
     */
    loadListeners() {
        // Load all listeners...
        AutoLoader
            .context(require.context('@listeners', true, /\.js$/))
            .each((alias, abstract)=>{
                // Bind listeners as factory constructors (false)
                this.bind(alias, abstract,false)

                // Make the event bus & Listen for events using the class name or event name.
                // Try to handle the payload or call the failed method.
                this.make('Events').$on((abstract.event || alias), (payload)=>{
                    try{
                        if(this.isBound(alias)){
                            const listener = this.make(alias)
                            try{
                                listener.handle(payload)
                            }catch (e) {
                                listener.failed(e)
                            }
                        }
                    }catch (e) {
                        this.handleError(e)
                    }
                })
            })
    }

    /**
     * Dispatch Route Request through Middleware Stack.
     * Vue Router will not fire callbacks again if a redirect has occurred,
     * so we should sync the request again after calling next.
     * @return void
     */
    dispatch(to, from, next) {
        const Request = this.make('Request').capture({to, from, next})
        this
            .make('Kernel')
            .setMiddleware(Request.getMiddleware())
            .handle(Request, (Request) => {
                if (this.isCallable(Request.next)) {
                    Request.next()
                    Request.setRoute('to', this.make('Router').currentRoute)
                }
            })
    }

    /**
     * Dispatch Request through the Stack via Terminate in Reverse Order.
     * Once Vue Router has successfully entered the requested route, these last callbacks will be fired.
     * @return void
     */
    terminate(to, from) {
        const Request = this.make('Request').capture({to, from})
        this
            .make('Kernel')
            .setMiddleware(Request.getMiddleware())
            .terminate(Request, (Request) => {
                if (this.isCallable(Request.next)) {
                    Request.next()
                }
            })
    }
}
