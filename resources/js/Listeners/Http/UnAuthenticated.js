"use strict";
export default class UnAuthenticated {

    /**
     * UnAuthenticated Constructor
     * @param App {Container}
     */
    constructor(App) {
        this.app = App
    }

    /**
     * Event Name
     * @return {string}
     */
    static get event(){
        return 'error:401'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {

        this.app.make('Events')
            .$emit('state:init')
            .$emit('toast:warn', {
                title: 'UnAuthenticated'
            })

        const Route = this.app.make('Route')
        const Request = this.app.make('Request')

        Request.navigate(
            Route.link('auth.login').withQuery({
                redirect: Request.get('to.fullPath')
            })
        )
    }
}
