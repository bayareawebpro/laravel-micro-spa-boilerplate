export default class Invalid {

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
        return 'error:422'
    }

    /**
     * Event Handler
     * @param payload {Object}
     */
    handle(payload) {
        console.info('Invalid@handle', {payload})
        this.app.make('Events').$emit('toast:warn', {
            title: payload.data.message || 'Invalid.'
        })
    }

    /**
     * Event Failed
     * @param error {Error}
     */
    failed(error) {
        console.error('Invalid@failed',{error})
    }
}
