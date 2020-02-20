export default class Authenticated {
    constructor(App) {
        this.$app = App
    }
    handle(user) {
        console.info('Authenticated@handle', {user})
    }
    failed(error) {
        console.error('Authenticated@failed',error)
    }
}
