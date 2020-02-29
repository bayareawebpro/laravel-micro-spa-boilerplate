"use strict";
import Resource from "../Services/Store/Resource"
export default class TokenResource extends Resource {

    constructor(App) {
        super(App)
    }

    /**
     * Resource URI Key
     * @return {String}
     */
    get resourceKey(){
        return 'tokens'
    }

    /**
     * Default Schema
     * @return {Object}
     */
    get schema() {
        return {
            entity: null,
            resource: null,
            loading: undefined,
        }
    }

    /**
     * User Roles
     * @return {Object}
     */
    get grants(){
        return Object.values(this.$config.get('permissions', {})).flat().map((grant)=>({
            label: grant,
            value: grant,
        }))
    }
}
