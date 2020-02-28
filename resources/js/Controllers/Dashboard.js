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
        }catch (e) {
            return Promise.reject(e)
        }
    }

}



