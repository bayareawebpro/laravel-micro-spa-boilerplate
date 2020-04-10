"use strict";
export default class Bind {

    constructor(App) {
        this.app = App
    }

    /**
     * Handle Next.
     * @param request {Request}
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
                return next(request.redirect(false))
            }
        }
        return next(request)
    }

    /**
     * Terminate Next.
     * @param request {Request}
     * @param next function
     * @return {*}
     */
    terminate(request, next) {
        return next(request)
    }
}
