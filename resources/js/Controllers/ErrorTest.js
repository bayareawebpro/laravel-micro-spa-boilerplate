import AbstractController from "./AbstractController"
export default class ErrorTest extends AbstractController {

    constructor(App) {
        super(App)
    }

    get schema(){
        return {
            entity: null,
        }
    }

    async get({status}){
        try{
            await this.$http.get(`api/errors/${status}`)
        }catch (error) {
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    }

}



