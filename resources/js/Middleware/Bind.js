"use strict";
export default class Bind {

    constructor(App) {
        this.app = App
    }

    /**
     * Handle Next.
     * @param request {Object}
     * @param next function
     * @return {*}
     */
    async handle(request, next) {
        if(request.hasBindings){
            try{
                await Promise.all(request.get('to.meta.bindings', []).map((binding)=>{
                    const [alias, method] = binding.split('@')
                    const instance = this.app.make(alias)
                    return instance[method](request.all())
                }))
            }catch (error) {
                if(request.routeIs(request.get('from.name')) && error.response && error.response.status === 422){
                    return next(request.redirect(false))
                }else{
                    return next(request.redirect(
                        this.app.make('Route').link('error').withParams(error.response || {status: 500})
                    ))
                }
            }
        }
        return next(request)
    }

    /**
     * Terminate Next.
     * @param response {Object}
     * @param next function
     * @return {*}
     */
    terminate(response, next) {
        return next(response)
    }
}
