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
        const bindings = [
            'Auth', 'Menus', 'Pages',
            'TokenResource',
            'UserResource',
        ]
        bindings.forEach((alias)=>{
            if(this.app.isResolved(alias)){
                this.app.getInstance(alias).initState()
            }
        })
    }
}
