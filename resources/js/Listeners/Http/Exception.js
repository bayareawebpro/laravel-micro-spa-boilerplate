export default class Exception {

    /**
     * Exception Constructor
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
        return 'error:500'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        console.info('Exception@handle', {payload})

        //this.$events.$emit('toast:error', {
        //    title: error.response.data.message || 'Error.'
        //})
    }

    /**
     * Event Failed
     * @param error {Error}
     */
    failed(error) {
        console.error('Exception@failed',error)
    }
}
