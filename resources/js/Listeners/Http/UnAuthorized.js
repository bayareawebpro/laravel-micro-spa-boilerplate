"use strict";
export default class UnAuthorized {

    /**
     * UnAuthorized Constructor
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
        return 'error:403'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        this.app.make('Events').$emit('toast:warn', {
            title: 'UnAuthorized.'
        })
    }
}
