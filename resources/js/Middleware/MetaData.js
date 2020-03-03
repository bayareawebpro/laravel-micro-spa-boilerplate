"use strict";
export default class MetaData {

    constructor(App) {
        this.app = App
    }

    static get global(){
        return true
    }

    /**
     * Handle Next.
     * @param request {Request}
     * @param next {function}
     * @return {*}
     */
    async handle(request, next) {
        console.log(request.get('to.meta.title','Your Website'))
        document.title = request.get('to.meta.title','Your Website')

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
