import RouteLink from './RouteLink'
export default class Route extends RouteLink{

    /**
     * Route Constructor
     * @param name {String}
     * @param path {String}
     */
    constructor(name = null, path = null) {
        super(name)
        this.path = path
        this.meta = {
            middleware: [],
            bindings: []
        }
    }

    /**
     * Make new Route instance.
     * @param name {String}
     * @param path {String}
     * @return {Route}
     */
    static to(name = null,path = null) {
        return new Route(name,path)
    }

    /**
     * Make new RouteLink instance.
     * @param name {String}
     * @return {RouteLink}
     */
    static link(name = null) {
        return RouteLink.link(name)
    }

    /**
     * @param handler {Function}
     */
    static setErrorHandler(handler){
        Route.errorHandler = handler
    }

    /**
     * Component Resolver
     * @return {Function}|{Object}|null
     */
    get component() {
        if (typeof this.comp === 'function') {
            return async () => await this.comp().catch(Route.errorHandler || ((e)=>console.error(e)))
        }
        return this.comp
    }

    /**
     * With meta data.
     * @param key {String}
     * return this
     */
    withMeta(key){
        this.meta[key] = value
        return this
    }

    /**
     * @param method {String}
     * @return this
     */
    uses(method) {
        this.meta.bindings.push(method)
        if (!this.meta.middleware.includes('bind')) {
            this.middleware('bind')
        }
        return this
    }

    /**
     * @param aliases [String]|{String}
     * @return this
     */
    middleware(aliases) {
        aliases = Array.isArray(aliases) || Object.values(arguments)
        this.meta.middleware = this.meta.middleware.concat(aliases)
        return this
    }

    /**
     * @param comp {Function}
     * @return this
     */
    view(comp) {
        this.comp = comp
        return this
    }

    /**
     * @param route {Route|RouteLink}
     * @return this
     */
    redirectTo(route) {
        this.redirect = route
        return this
    }
}
