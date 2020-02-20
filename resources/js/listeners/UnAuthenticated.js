export default class UnAuthenticated {
    constructor(user) {
        this.user = user
    }
    handle(user) {
        console.info('UnAuthenticated@handle', {user})
    }
    failed(error) {
        console.error('UnAuthenticated@failed',error)
    }
}
