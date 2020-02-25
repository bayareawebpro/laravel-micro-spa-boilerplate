"use strict";
export default class Exception {

    /**
     * Exception Constructor
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
        return 'error:500'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        this.app.make('Events').$emit('toast:error', {
            title: 'Exception.'
        })

        console.log(payload)

        this.app.make('Router').push(
            this.app.make('Route').link('error').withParams(payload)
        )
    }
}
