"use strict";
import {_Mixin} from "laravel-micro.js"
import Resource from "./Concerns/Resource"
import AbstractController from "./AbstractController"
export default class Attachments extends AbstractController {

    constructor(App) {
        super(App)
    }

    get resourceKey(){
        return 'attachments'
    }

    get schema(){
        return {
            entity: null,
        }
    }

    async upload(data){
        try{
            return await this.$http.upload(`/api/attachments`,data)
        }catch (error) {
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    }
}
_Mixin(Attachments, Resource)



