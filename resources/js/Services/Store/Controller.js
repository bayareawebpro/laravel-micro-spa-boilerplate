"use strict";
import Vue from "vue"
import {Repository, Validator} from "laravel-micro.js"

/**
 * @alias $request
 * @alias $router
 * @alias $events
 * @alias $http
 * @alias $link
 */
export default class Controller {

    /**
     * Abstract Store / Controller
     * @param App
     */
    constructor(App) {
        this.$app = App
        this.initState()
    }

    /**
     * Request Instance
     * @return {Request}
     */
    get $request(){
        return this.$app.make('Request')
    }

    /**
     * Config Instance
     * @return {Config}
     */
    get $config(){
        return this.$app.make('Config')
    }

    /**
     * Router Instance
     * @return {Router}
     */
    get $router(){
        return this.$app.make('Router')
    }

    /**
     * Events Instance
     * @return {Events}
     */
    get $events(){
        return this.$app.make('Events')
    }

    /**
     * Http Instance
     * @return {Http}
     */
    get $http(){
        return this.$app.make('Http')
    }

    /**
     * Route Instance
     * @param name {String}
     * @return {Route}
     */
    $link(name){
        return this.$app.make('Route').link(name)
    }

    /**
     * Store Schema
     * @return {Object}
     */
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
        console.log(`${this.$app.getName(this)}::initState`)
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
        this.$state.forget('loading')
        if(
            error.hasOwnProperty('response') &&
            error.response.hasOwnProperty('data')){
            this.$errors.sync(error.response.data)
        }else{
            console.error(error)
        }
        return error
    }
}
