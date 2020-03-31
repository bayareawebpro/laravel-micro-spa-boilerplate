"use strict";
import Resource from "../Services/Store/Resource"
export default class TokenResource extends Resource {

    constructor(App) {
        super(App)
    }

    /**
     * Resource URI Key
     * @usage /api/{resourceKey}
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
            loading: null,
            editing: null,
            destroying: null,
            resource: null,
        }
    }

    // Additional Methods
}
