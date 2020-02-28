"use strict";
import Resource from "../Services/Store/Resource"
export default class TokenResource extends Resource {

    constructor(App) {
        super(App)
    }

    get resourceKey(){
        return 'tokens'
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
