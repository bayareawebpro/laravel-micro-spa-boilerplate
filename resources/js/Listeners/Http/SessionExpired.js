"use strict";
export default class SessionExpired {

    /**
     * UnAuthenticated Constructor
     * Http Status: 419
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
        return 'error:419'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        this.app.make('Events')
            .$emit('state:init')
            .$emit('toast:error', {
                title: 'SessionExpired.'
            })
        this.app.make('Router').push(
            this.app.make('Route').link('auth.login')
        )
    }
}
