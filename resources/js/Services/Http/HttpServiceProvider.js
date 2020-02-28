import HttpService from "./HttpService"
import WorkerService from "./WorkerService"
import {ServiceProvider} from "laravel-micro.js"
export default class HttpServiceProvider extends ServiceProvider{

    /**
     * Register any application services
     * @return void
     */
    register() {
        this.app.bind('Http',HttpService)
        this.app.bind('Worker',WorkerService)
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
