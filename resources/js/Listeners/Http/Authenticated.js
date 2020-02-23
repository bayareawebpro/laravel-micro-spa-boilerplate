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
        return 'auth:success'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        console.info('Authenticated@handle', {payload})
    }

    /**
     * Event Failed
     * @param error {Error}
     */
    failed(error) {
        console.error('Authenticated@failed',error)
    }
}
