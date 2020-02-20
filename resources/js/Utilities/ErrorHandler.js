export default class ErrorHandler{
    constructor(app) {
        this.$app = app
    }
    handle(error){
        // if(error.vm){
        //     return this.vueError(error)
        // }
        return this.genericError(error)
    }
    vueError({err, vm, info}){
        console.error('ErrorHandler@vueError',err, vm, info)
    }
    genericError(error){
        console.error('ErrorHandler@genericError',error)
        //this.$app.make('Events').$emit('toast:error', {title: error.toString()});
    }
}
