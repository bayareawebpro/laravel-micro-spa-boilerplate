"use strict";
import Controller from "../Services/Store/Controller"
export default class Auth extends Controller {

    constructor(App) {
        super(App)
        this.$state.set('entity', window.__APP_USER__ || null)
    }

    get schema() {
        return {
            entity: null,
        }
    }

    /**
     * Is the local state authorized?
     * @return {boolean}
     */
    get user() {
        return this.$state.get('entity')
    }

    /**
     * Update the Authorized User
     * @return void
     */
    async update({id, ...params}) {

        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'account.update')

            const {data} = await this.$http.put(`/api/users/${id}`, params)

            await this.$state
                .update(data)
                .forget('loading')

        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }


    /**
     * Authorize the Current Request
     * @return {Promise}
     */
    async authorize() {
        try {
            await this.$state.put('loading', 'auth.authorize')

            const {data} = await this.$http.get('/api/account/show')

            await this.$state
                .update(data)
                .forget('loading')

        } catch (error) {
            await this.$state.forget('loading')
            return Promise.reject(this.handleError(error))
        }
    }

    /**
     * Login & Authorize User
     * @return void
     */
    async login(form) {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'auth.login')

            await this.$http.get('/airlock/csrf-cookie').then(async () => {

                const {data} = await this.$http.post('/login', form)

                await this.$state
                    .update(data)
                    .forget('loading')

                await this.$events.$emit('auth:login')
                await this.$request.replace(
                    this.$request.pull('to.query.redirect')
                    || this.$link('dashboard')
                )
            })
        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }

    /**
     * Register & Authorize User
     * @return void
     */
    async register(form) {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'auth.register')

            await this.$http.get('/airlock/csrf-cookie').then(async () => {

                const {data} = await this.$http.post('/register', form)

                await this.$state
                    .update(data)
                    .forget('loading')

                await this.$request.replace(this.$link('auth.account'))
            })
        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }

    /**
     * Logout & DeAuthorize User
     * @return void
     */
    async logout() {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'auth.logout')

            await this.$http.get('/airlock/csrf-cookie').then(async () => {

                await this.$http.post('/logout').then(async () => {

                    await this.$state
                        .set('entity', null)
                        .forget('loading')

                    await this.$events.$emit('auth:logout')
                    await this.$request.replace(this.$link('auth.login'))
                })
            })
        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }

    /**
     * Request Password Reset Email
     * @return void
     */
    async forgot(form) {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'auth.forgot')

            const {data} = await this.$http.post('/password/email', form)

            await this.$state
                .update(data)
                .forget('loading')

        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }

    /**
     * Request Password Reset
     * @return void
     */
    async reset(form) {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'auth.reset')

            const {data} = await this.$http.post('/password/reset', form)

            await this.$state
                .update(data)
                .forget('loading')

            await this.$router.push({name: 'auth.login'})

        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }
}



