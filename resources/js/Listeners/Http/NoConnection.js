"use strict";
export default class NoConnection {

    /**
     * Authenticated Constructor
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
        return 'error:network'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        this.app.make('Events').$emit('toast:error', {
            title: 'No Connection.'
        })
    }
}
