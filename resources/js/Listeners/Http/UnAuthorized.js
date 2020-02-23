export default class UnAuthorized {

    /**
     * UnAuthorized Constructor
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
        return 'error:403'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        console.info('UnAuthorized@handle', {payload})

        // this.$events.$emit('toast:warn', {
        //     title: error.response.data.message || 'UnAuthorized.'
        // })
    }

    /**
     * Event Failed
     * @param error {Error}
     */
    failed(error) {
        console.error('UnAuthorized@failed',error)
    }
}
