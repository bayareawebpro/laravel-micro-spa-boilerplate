import LaravelMicro from 'laravel-micro.js'
import AutoLoader from "./utilities/AutoLoader"
export default class Application extends LaravelMicro {

    /**
     * Application Constructor
     * @return void
     */
    constructor() {
        super();
        this.stack = []
    }

    /**
     * Dispatch Route Request through Middleware Stack.
     * @return void
     */
    loadProviders() {
        this.setInstance('AutoLoader', AutoLoader)
        this.make('AutoLoader')
            .context(require.context('./services', true, /\.*ServiceProvider.js$/))
            .each((name, abstract) =>this.register(abstract))
    }
    /**
     * Dispatch Route Request through Middleware Stack.
     *
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
     * Dispatch Route Request in Reverse Order through Middleware Stack via Terminate.
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
