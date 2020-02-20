"use strict";
export default class Guest {

    constructor(App) {
        this.app = App
    }

    /**
     * Handle Next.
     * @param request {Object}
     * @param next function
     * @return {*}
     */
    async handle(request, next) {
        if (request.user()) {
            request.redirect({name: 'dashboard'})
        }
        return next(request)
    }

    /**
     * Terminate Next.
     * @param response {Object}
     * @param next function
     * @return {*}
     */
    terminate(response, next) {
        return next(response)
    }
}
