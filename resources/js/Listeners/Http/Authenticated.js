"use strict";
export default class Authenticated {

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
        return 'auth:login'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        // this.app.make('Events').$emit('toast:success', {
        //     title: 'Authenticated Successfully.'
        // })
    }
}
