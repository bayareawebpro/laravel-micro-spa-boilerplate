import Vue from "vue"
import {Repository, Validator} from "laravel-micro.js"
export default class AbstractController {

    /**
     * Abstract Store / Controller
     * @param App
     */
    constructor(App) {
        this.$app = App
        this.$request = this.$app.make('Request')
        this.$router = this.$app.make('Router')
        this.$events = this.$app.make('Events')
        this.$http = this.$app.make('Http')
        this.initState()
    }

    get schema() {
        return {
            loading: false,
        }
    }

    /**
     * Initialize State
     * @return void
     */
    initState() {
        console.log(`Store::Init ${this.$app.getName(this)}`)
        this.$state = Vue.observable(new Repository(this.schema))
        this.$errors = Vue.observable(new Validator)
    }

    /**
     * Has Entity ID
     * @return {Boolean}
     */
    hasEntity(id) {
        return this.$state.hasValue('entity.id', Number(id))
    }

    /**
     * Is state is loading
     * @return {Boolean}
     */
    isLoading(val = true) {
        return this.$state.hasValue('loading', val)
    }

    /**
     * Handle Error Response
     * @param error {Error}
     * @return {Promise<any>}
     */
    handleError(error) {
        if(error.hasOwnProperty('response') && error.response.hasOwnProperty('data')){
            this.$errors.sync(error.response.data)
        }
        return Promise.reject(error)
    }
}
