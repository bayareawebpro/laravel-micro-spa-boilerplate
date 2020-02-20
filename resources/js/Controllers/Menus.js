import AbstractController from "./AbstractController"
export default class Menus extends AbstractController {
    constructor(App) {
        super(App)
    }

    get schema(){
        return {
            left: {
                active: false
            },
            right: {
                active: false
            },
            dev: {
                active: false
            },
            users: {
                active: false
            },
            tokens: {
                active: false
            },
            kitchensink: {
                active: false
            },
        }
    }
}



