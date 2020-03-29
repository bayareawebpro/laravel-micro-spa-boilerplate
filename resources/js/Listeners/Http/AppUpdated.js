"use strict";
export default class AppUpdated {

    /**
     * NotFound Constructor
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
        return 'app:updated'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        this.app.make('Events').$emit('toast:warn', {
            title: 'App Update Available.'
        })

        this.app.make('Router').push(
            this.app.make('Route').link('app.update')
        )
    }
}
