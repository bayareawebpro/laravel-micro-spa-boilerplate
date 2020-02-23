export default class SessionExpired {

    /**
     * UnAuthenticated Constructor
     * Http Status: 419
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
        return 'error:419'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        console.info('UnAuthenticated@handle', {payload})
        // this.$events.$emit('toast:error', {
        //     title: error.response.data.message || 'Session Expired.'
        // })
    }

    /**
     * Event Failed
     * @param error {Error}
     */
    failed(error) {
        console.error('UnAuthenticated@failed',error)
    }
}
