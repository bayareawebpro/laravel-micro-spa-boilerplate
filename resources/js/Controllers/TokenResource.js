import {_Mixin} from "laravel-micro.js"
import Resource from "./Concerns/Resource"
import AbstractController from "./AbstractController"
export default class TokenResource extends AbstractController {

    constructor(App) {
        super(App)
        this.resourceKey = 'tokens';
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
_Mixin(TokenResource, Resource)
