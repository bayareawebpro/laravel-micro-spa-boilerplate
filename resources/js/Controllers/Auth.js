"use strict";
import AbstractController from "./AbstractController"
export default class Auth extends AbstractController {
    constructor(App) {
        super(App)
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
     * Authorize the Current Request
     * @return {Promise}
     */
    async authorize() {
        try {
            await this.$state.put('loading', 'login')
            const {data} = await this.$http.get('/api/account/show')
            await this.$state.forget('loading')
            await this.$state.update(data)
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
            await this.$state.put('loading', 'login')
            await this.$http.get('/airlock/csrf-cookie').then(async () => {
                const {data} = await this.$http.post('/login', form)
                await this.$state.update(data)
                await this.$router.push(this.$request.pull('to.query.redirect') || {name: 'dashboard'})
                await this.$events.$emit('auth:login')
            })
        } catch (error) {
            await this.$state.forget('loading')
            this.handleError(error)
        }
    }

    /**
     * Register & Authorize User
     * @return void
     */
    async register(form) {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'login')
            await this.$http.get('/airlock/csrf-cookie').then(async () => {
                const {data} = await this.$http.post('/register', form)
                await this.$state.update(data)
                await this.$router.push({name: 'auth.account'})
                await this.$state.forget('loading')
            })
        } catch (error) {
            this.$state.forget('loading')
            this.handleError(error)
        }
    }

    /**
     * Logout & DeAuthorize User
     * @return void
     */
    async logout() {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'logout')
            await this.$http.get('/airlock/csrf-cookie').then(async () => {
                await this.$http.post('/logout').then(() => {
                    this.$state.set('entity', null)
                    this.$state.forget('loading')
                    this.$router.push({name: 'auth.login'})
                    this.$events.$emit('auth:logout')
                })
            })
        } catch (error) {
            this.$state.forget('loading')
            this.handleError(error)
        }
    }

    /**
     * Request Password Reset Email
     * @return void
     */
    async forgot(form) {
        try {
            await this.$errors.clear()
            await this.$state.put('loading', 'forgot')
            const {data} = await this.$http.post('/password/email', form)
            await this.$state.update(data)
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
            await this.$state.put('loading', 'reset')
            const {data} = await this.$http.post('/password/reset', form)
            await this.$state.update(data)
            await this.$router.push({name: 'auth.login'})
        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }

    /**
     * Update the Authorized User
     * @return void
     */
    async update({id, ...params}) {
        await this.$state.put('loading', 'update')
        try {
            const {data} = await this.$http.put(`/api/users/${id}`, params)
            await this.$state.update(data)
        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }

    /**
     * Confirm Email Address
     * @return void
     */
    async confirm(form) {
        try {
            const {data} = await this.$http.post('/password/confirm', form)
            await this.$state.update(data)
            await this.$router.push({name: 'auth.login'})
        } catch (error) {
            await this.$state.forget('loading')
            await this.handleError(error)
        }
    }
}



