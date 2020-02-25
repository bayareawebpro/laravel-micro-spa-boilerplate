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
        this.app.make('Auth').initState()
        this.app.make('Menus').initState()
        this.app.make('Events').$emit('toast:warn', {
            title: 'UnAuthenticated'
        })
    }
}
