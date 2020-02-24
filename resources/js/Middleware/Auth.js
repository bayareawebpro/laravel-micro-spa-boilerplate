"use strict";
export default class Auth {

    /**
     * Auth Middleware
     * @param App
     */
    constructor(App) {
        this.app = App
    }

    /**
     * Handle Next.
     * @param request {Object}
     * @param next {Function}
     * @return {*}
     */
    async handle(request, next) {
        if (request.hasMiddleware('auth') && !request.user()){
            try {
                await this.app.make('Auth').authorize()
            } catch (e) {
                if(!request.routeIs('auth.login')){
                    return next(request.redirect(this.app.make('Route').link('auth.login')))
                }
            }
        }
        return next(request)
    }

    /**
     * Terminate Next.
     * @param response {Object}
     * @param next {Function}
     * @return {*}
     */
    terminate(response, next) {
        return next(response)
    }
}
