"use strict";
import {_Mixin} from "laravel-micro.js"
import Resource from "./Concerns/Resource"
import AbstractController from "./AbstractController"

export default class UserResource extends AbstractController {
    constructor(App) {
        super(App)
    }

    /**
     * Resource Key
     * @return {String}
     */
    get resourceKey() {
        return 'users'
    }

    /**
     * Default Schema
     * @return {Object}
     */
    get schema() {
        return {
            resource: null,
            entity: null,
        }
    }
}
_Mixin(UserResource, Resource)



