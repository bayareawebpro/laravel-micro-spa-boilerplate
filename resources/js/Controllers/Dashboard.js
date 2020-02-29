"use strict";
import Controller from "../Services/Store/Controller"
export default class Dashboard extends Controller {
    constructor(App) {
        super(App)
    }

    get schema() {
        return {
            entity: null,
        }
    }

    async show(){
        try{
            const {data} = await this.$http.get('/api/dashboard')
            this.$state.update(data)
        }catch (error) {
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    }
}



