"use strict";
import Controller from "../Services/Store/Controller"
export default class Dashboard extends Controller {
    constructor(App) {
        super(App)
    }

    get schema() {
        return {
            page: null,
        }
    }

    async show(slug){
        try{
            //if(this.$state.exists(slug)) return;
            const {data} = await this.$http.get(`/api/pages/${slug}`)
            this.$state.update(data)
        }catch (e) {
            return Promise.reject(this.handleError(e))
        }
    }
}



