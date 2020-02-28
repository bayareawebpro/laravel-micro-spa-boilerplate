"use strict";
import Resource from "../Services/Store/Resource"
export default class UserResource extends Resource {
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
     * User Roles
     * @return {Object}
     */
    get roles(){
        return this.$config.get('roles', [])
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



