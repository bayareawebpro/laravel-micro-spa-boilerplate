export default class NotFound {

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
        return 'error:404'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        console.info('NotFound@handle', {payload})

        // this.$events.$emit('toast:error', {
        //     title: error.response.data.message || 'Not Found.'
        // })
    }

    /**
     * Event Failed
     * @param error {Error}
     */
    failed(error) {
        console.error('NotFound@failed',error)
    }
}
