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
        console.info('UnAuthenticated@handle', {payload})
        // this.$events.$emit('toast:warn', {
        //     title: error.response.data.message || 'UnAuthenticated.'
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
