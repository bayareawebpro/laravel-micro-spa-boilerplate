import {ServiceProvider, Repository} from "laravel-micro.js"
export default class StoreServiceProvider extends ServiceProvider {

    /**
     * Register any application services
     * @return void
     */
    register() {

        this.app.bind('userResolver', (Auth)=>Auth.user, false)

        this.app.bind('Repository', (Vue)=>Vue.observable(new Repository), false)

        this.app.bind('Config', (Repository)=>{
            const {config} = window.__APP_STATE__
            return Repository.make(config)
        })

        this.app
            .make('AutoLoader')
            .context(require.context('@controllers', true, /\.js$/))
            .each((binding, abstract)=>this.app.bind(binding, abstract))

    }

    /**
     * Boot any application services
     * @return void
     */
    boot() {}

    /**
     * Declare the aliases for the provided services
     * @return {Array}
     */
    get provides() {
        return [
            'TokenResource',
            'UserResource',
            'Config',
            'Auth',
        ]
    }
}
