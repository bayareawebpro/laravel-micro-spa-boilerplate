import Vue from 'vue'
import VueRoot from '@views/VueRoot'
import AutoBinder from './AutoBinder'
import VueScrollTo from 'vue-scrollto'
import bytesForHumans from './Filters/bytesForHumans'
import {ServiceProvider} from 'laravel-micro.js'
export default class VueServiceProvider extends ServiceProvider {

    /**
     * Register any application services
     * @return void
     */
    register() {
        this.bindToVue()
        this.registerBindings()
        this.registerDependants()
    }

    /**
     * 3rd Part Components
     * @return void
     */
    registerDependants() {
        Vue.use(AutoBinder, {
            app: this.app,
        })
        Vue.use(VueScrollTo, {
            container: "body",
            duration: 100,
            easing: "ease",
            offset: 0,
            force: false,
            cancelable: true,
            onStart: false,
            onDone: false,
            onCancel: false,
            x: false,
            y: true
        })
    }

    /**
     * Primary Bindings
     * @return void
     */
    registerBindings() {
        this.app.bind('Vue', () => Vue)
        this.app.bind('VueRoot', (Router) => {
            const root = new Vue({...VueRoot, router: Router})
            root.$mount("#app")
            return root
        })
    }

    /**
     * Vue Bindings
     * @return void
     */
    bindToVue() {
        Vue.prototype.$app = this.app
        Vue.prototype.errorCaptured = (err, vm, info) => {
            this.app.handleError({err, vm, info})
        }
    }

    /**
     * Boot any application services
     * @return void
     */
    boot() {
        this.app
            .make('AutoLoader')
            .context(require.context('@components', true, /\.vue$/))
            .components(Vue.component.bind(Vue))

        Vue.filter('bytesForHumans', bytesForHumans)
    }

    /**
     * Declare the aliases for the provided services
     * @return {Array}
     */
    get provides() {
        return [
            'Vue',
            'Events',
            'VueRoot',
        ]
    }
}
