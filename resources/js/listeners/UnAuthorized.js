export default class UnAuthorized {
    constructor(user) {
        this.user = user
    }
    handle(user) {
        console.info('UnAuthorized@handle', {user})
    }
    failed(error) {
        console.error('UnAuthorized@failed',error)
    }
}
