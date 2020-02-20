import AbstractController from "./AbstractController"
export default class Auth extends AbstractController {
    constructor(App) {
        super(App)
    }

    get schema(){
        return {
            entity: null,
            test:'',
        }
    }

    /**
     * Is the local state authorized?
     * @return {boolean}
     */
    get user(){
        return this.$state.get('entity')
    }

    /**
     * Authorize the Current Request
     * @return {Promise<any>}
     */
    async authorize() {
        try {
            await this.$state.put('loading', 'login')
            await this.$http.get('/api/account/show').then(({data}) =>{
                this.$state.update(data)
            })
            await this.$state.forget('loading')
        } catch (error) {
            await this.$state.forget('loading')
            return this.handleError(error)
        }
    }

    /**
     * Login & Authorize User
     * @return void
     */
    async login(form) {
        await this.$state.put('loading', 'login')
        try {
            await this.$http.get('/airlock/csrf-cookie').then(async ()=>{
                const {data} = await this.$http.post('/login', form)
                this.$state.update(data)
                this.$router.push({name: 'dashboard'})
            })
        } catch (error) {
            this.handleError(error)
        }
        await this.$state.forget('loading')
    }

    /**
     * Register & Authorize User
     * @return void
     */
    async register(form) {
        await this.$state.put('loading', 'login')
        try {
            await this.$http.get('/airlock/csrf-cookie').then(async ()=>{
                const {data} = await this.$http.post('/register', form)
                this.$state.update(data)
                this.$router.push({name: 'auth.account'})
            })
        } catch (error) {
            this.handleError(error)
        }
        await this.$state.forget('loading')
    }

    /**
     * Logout & DeAuthorize User
     * @return void
     */
    async logout() {
        await this.$state.put('loading', 'login')
        await this.$http.get('/airlock/csrf-cookie').then(async ()=>{
            await this.$http.post('/logout').then(()=>{
                this.$state.set('entity', null)
                this.$router.push({name: 'auth.login'})
                this.$events.$emit('auth:logout')
            })
        })
        await this.$state.forget('loading')
    }

    /**
     * Request Password Reset Email
     * @return void
     */
    async forgot(form) {
        try {
            const {data} = await this.$http.post('/password/email', form)
            this.$state.update(data)
        } catch (error) {
            this.handleError(error)
        }
    }

    /**
     * Request Password Reset
     * @return void
     */
    async reset(form) {
        try {
            const {data} = await this.$http.post('/password/reset', form)
            this.$state.update(data)
            this.$router.push({name: 'auth.login'})
        } catch (error) {
            this.handleError(error)
        }
    }

    /**
     * Update the Authorized User
     * @return void
     */
    async update({id, ...params}) {
        try {
            const {data} = await this.$http.put(`/api/users/${id}`, params)
            this.$state.update(data)
        } catch (error) {
            this.handleError(error)
        }
    }

    /**
     * Confirm Email Address
     * @return void
     */
    async confirm(form) {
        try {
            const {data} = await this.$http.post('/password/confirm', form)
            this.$state.update(data)
            this.$router.push({name: 'auth.login'})
        } catch (error) {
            this.handleError(error)
        }
    }
}



