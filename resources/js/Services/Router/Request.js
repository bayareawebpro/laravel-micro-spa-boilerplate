import {Repository} from "laravel-micro.js"
import PreventsReactivity from "laravel-micro.js/src/Traits/PreventsReactivity"
export default class Request extends Repository {

    /**
     * Constructor
     * @param App
     * @return void
     */
    constructor(App) {
        super();
        this.app = App
        this.callback = null
    }

    /**
     * Get Current User
     * @returns {*}
     */
    user() {
        if (this.app.isBound('userResolver')) {
            return this.app.make('userResolver')
        }
    }

    /**
     * Get all the data parameters.
     * @return {Object}
     */
    all() {
        const query = this.get('to.query', {})
        const params = this.get('to.params', {})
        return Object.assign({}, {...params}, {...query})
    }

    /**
     * Capture Router Object
     * @param attributes {to, from, next}
     * @return Request
     */
    capture({to, from, next = null}) {
        this.setRoute('from', from)
        this.setRoute('to', to)
        this.callback = next
        return this
    }

    /**
     * Set route
     * @param type {String}
     * @param route {Object}
     * @return {Request}
     */
    setRoute(type, route){
        this.set(type, {
            name: route.name,
            meta: route.meta,
            hash: route.hash,
            path: route.path,
            query: route.query,
            params: route.params,
            fullPath: route.fullPath,
        })
        return this
    }

    /**
     * Has Guard
     * @param alias
     * @returns {boolean}
     */
    hasMiddleware(alias) {
        if (this.exists('to.meta.middleware')) {
            return this.get('to.meta.middleware', []).includes(alias)
        }
        return false
    }

    /**
     * Get Middleware
     * @return {Array}
     */
    getMiddleware() {
        if (this.app.isBound('Middleware')) {
            return this.app
                .make('Middleware')
                .filter(([alias, abstract]) => this.hasMiddleware(alias.toLowerCase()))
                .map(([alias, abstract]) => abstract)
        }
        return [];
    }

    /**
     * Has Bindings
     * @returns {boolean}
     */
    get hasBindings() {
        return this.exists('to.meta.bindings')
    }

    /**
     * "Next" Callback
     * @return this
     */
    next() {
        if (this.callback) {
            this.callback()
            this.callback=null
        }
        return this
    }

    /**
     * Route is named
     * @param names
     * @return {boolean}
     */
    routeIs(...names){
        return names.includes(this.get('to.name'))
    }

    /**
     * Redirect
     * @param route {Object}
     * @param onDone {Function}
     * @param onFail {Function}
     * @returns {this}
     */
    navigate(route, onDone = () => null, onFail = () => null) {
        this.app.make('Router').push(route, onDone, onFail)
        return this
    }

    /**
     * Redirect
     * @param route {Object}
     * @param onDone {Function}
     * @param onFail {Function}
     * @returns {this}
     */
    replace(route, onDone = () => null, onFail = () => null) {
        this.app.make('Router').push(route, onDone, onFail)
        return this
    }

    /**
     * Redirect to Previous Route
     * @return {*}
     */
    previous() {
        return this.redirect(this.get('from'))
    }

    /**
     * Redirect
     * @param route {Object}
     * @returns {this}
     */
    redirect(route) {
        if(this.callback){
            const next = this.callback
            this.capture({
                to: route,
                from: this.get('to'),
                next: ()=>next(route)
            })
        }
        return this
    }
}
PreventsReactivity(Request,'app');
