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
        return 'state:init'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        this.app.make('Auth').initState()
        this.app.make('Menus').initState()
        this.app.make('TokenResource').initState()
        this.app.make('UserResource').initState()
    }
}
