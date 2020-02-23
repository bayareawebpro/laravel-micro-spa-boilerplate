export default class NoConnection {

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
        return 'error:network'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        console.info('NoConnection@handle', {payload})

        // this.$events.$emit('toast:error', {
        //     title: payload.message || 'Network Error'
        // })
    }

    /**
     * Event Failed
     * @param error {Error}
     */
    failed(error) {
        console.error('NoConnection@failed',error)
    }
}
