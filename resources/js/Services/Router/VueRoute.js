/**
 * Route Collection
 * @type {VueRoute[]}
 */
const routeCollection = []
export {routeCollection};

import Route from './Route'
export default class VueRoute extends Route{

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
        if(name){
            routeCollection.push(this)
        }
    }

    /**
     * Make new Route instance.
     * @param name {String}
     * @param path {String}
     * @return {VueRoute}
     */
    static to(name = null,path = null) {
        return new VueRoute(name,path)
    }


    /**
     * Make new Route instance.
     * @param path {String}
     * @return {VueRoute}
     */
    static group(path = null) {
        return new VueRoute(null,path)
    }

    /**
     * Make new RouteLink instance.
     * @param name {String}
     * @return {Route}
     */
    static link(name = null) {
        return Route.link(name)
    }

    /**
     * @param handler {Function}
     */
    static setErrorHandler(handler){
        VueRoute.errorHandler = handler
    }

    /**
     * Component Resolver
     * @return {Function}|{Object}|null
     */
    get component() {
        if (typeof this.comp === 'function') {
            return async () => await this.comp().catch(VueRoute.errorHandler || ((e)=>console.error(e)))
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
     * @param group {VueRoute[]}
     * @return this
     */
    group(group) {
        this.children = group
        return this
    }

    /**
     * @param route {VueRoute|Route}
     * @return this
     */
    redirectTo(route) {
        this.redirect = route
        return this
    }
}
