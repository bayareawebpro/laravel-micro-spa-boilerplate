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
        this.app.make('Events').$emit('toast:error', {
            title: 'NotFound.'
        })

        this.app.make('Router').push(
            this.app.make('Route').link('error').withParams(payload)
        )
    }
}
