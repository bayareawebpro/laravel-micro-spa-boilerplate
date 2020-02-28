"use strict";
import Vue from "vue"
import {Repository, Validator} from "laravel-micro.js"
export default class Controller {

    /**
     * Abstract Store / Controller
     * @param App
     */
    constructor(App) {
        this.$app = App
        this.initState()
    }
    get $request(){
        return this.$app.make('Request')
    }
    get $router(){
        return this.$app.make('Router')
    }
    get $events(){
        return this.$app.make('Events')
    }
    get $http(){
        return this.$app.make('Http')
    }
    get $link(){
        return this.$app.make('Route').link
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
        console.log(`State::Init ${this.$app.getName(this)}`)
        this.$state = this.$state ? this.$state.sync(this.schema) : Vue.observable(new Repository(this.schema))
        this.$errors = this.$errors ? this.$errors.setErrors() : Vue.observable(new Validator)
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
     * @return {Error}
     */
    handleError(error) {
        if(
            error.hasOwnProperty('response') &&
            error.response.hasOwnProperty('data')){
            this.$errors.sync(error.response.data)
        }
        return error
    }
}
