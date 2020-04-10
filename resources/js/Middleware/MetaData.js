"use strict";
export default class MetaData {

    /**
     * MetaData Middleware
     * @param App
     */
    constructor(App) {
        this.app = App
    }

    /**
     * Global Pipe
     * @return {boolean}
     */
    static get global(){
        return true
    }

    /**
     * Handle Next.
     * @param request {Request}
     * @param next {function}
     * @return {*}
     */
    handle(request, next) {
        document.title = request.get('to.meta.title') || this.app.make('Config').get('seo.title')
        return next(request)
    }

    /**
     * Terminate Next.
     * @param response {Response}
     * @param next {function}
     * @return {*}
     */
    terminate(response, next) {
        return next(response)
    }
}
