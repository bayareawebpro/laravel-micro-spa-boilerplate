import HttpService from "./HttpService"
import {ServiceProvider} from "laravel-micro.js"
export default class HttpServiceProvider extends ServiceProvider{

    /**
     * Register any application services
     * @return void
     */
    register() {
        this.app.bind('Http',HttpService)

        this.app.bind('Worker',async ()=>{
            const exported = await import(/*webpackChunkName:"http-worker"*/ './WorkerService')
            return await this.app.bind('Worker', exported.default).rebound('Worker')
        })
    }

    /**
     * Boot any application services
     * @return void
     */
    async boot() {
        const exported = await import(/*webpackChunkName:"http-progress"*/ './HttpProgress')
        await this.app.make('Http').useProgressBar(exported.default)
    }

    /**
     * Declare the aliases for the provided services
     * @return {Array}
     */
    get provides() {
        return [
            'Http',
            'Worker',
        ]
    }
}
