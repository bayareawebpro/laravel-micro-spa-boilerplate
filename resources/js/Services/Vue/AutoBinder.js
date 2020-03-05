export default {
    install(Vue, {app, alias}) {
        const instance = new MicroVue(app)
        Object.defineProperty(Vue.prototype, '$bind', {
            configurable: true,
            get() {
                this.$options.computed = this.$options.computed || {}
                this.$options.methods = this.$options.methods || {}
                return instance.bindTo(this.$options)
            }
        })
    },
}
class MicroVue {

    /**
     * AutoBinder Constructor
     * @param App {Container}
     */
    constructor(App) {
        this.app = App
    }

    /**
     * For Vue Module
     * @param obj {Object}
     * @return this
     */
    bindTo(obj){
        this.options = obj
        return this
    }

    /**
     * Resolve Binding Signature
     * @param signature {String}
     * @return {Function|Object}
     */
    resolve(signature){
        if(signature.includes('@')){
            const [bind, method] = signature.split('@')
            return this.app.make(bind)[method]
        }
        return this.app.make(signature)
    }

    /**
     * Map Watchers
     * @param bind {String}
     * @param map {Object}
     * @return this
     */
    mapWatchers(bind, map){
        const instance = this.resolve(bind)
        Object.entries(map).forEach(([alias, config]) => {
            this.options.watch = this.options.watch || {}
            if(typeof config === 'string'){
                config = {handler: instance[config].bind(instance)}
            }else if(typeof instance[config.handler] === 'function'){
                config.handler = instance[config.handler].bind(instance)
            }
            this.options.watch[alias] = config
        })
        return this
    }

    /**
     * Map Instance State
     * @param bind {String}
     * @param map {Object}
     * @param cache {Boolean}
     * @return this
     */
    mapState(bind, map, cache = true) {
        const instance = this.resolve(bind)
        Object.entries(map).forEach(([alias, accessor]) => {
            this.options.computed = this.options.computed || {}
            this.options.computed[alias] = {
                get: ()=> typeof accessor === 'function' ? accessor(instance) : instance[accessor],
                set: (val)=> instance[accessor] = val,
                cache: cache
            }
        })
        return this
    }

    /**
     * Map Getters
     * @param bind {String}
     * @param map {Object}
     * @param cache {Boolean}
     * @return this
     */
    mapGetters(bind, map, cache = true) {
        const instance = this.resolve(bind)
        Object.entries(map).forEach(([alias, accessor]) => {
            this.options.computed = this.options.computed || {}
            if(typeof (instance.$state || instance).get !== 'function'){
                throw new Error(`${bind} does not have a $state property or provide a get/set interface.`)
            }
            this.options.computed[alias] = {
                set: (val) => (instance.$state || instance).set(accessor, val),
                get: () => (instance.$state || instance).get(accessor),
                cache: cache,
            }
        })
        return this
    }

    /**
     * Map Actions
     * @param bind {String}
     * @param actionMap {Object}
     * @return this
     */
    mapActions(bind, actionMap) {
        const instance = this.resolve(bind)
        Object.entries(actionMap).forEach(([alias, method]) => {
            if (typeof instance[method] !== 'function') {
                throw new Error(`mapAction ${bind} => ${method} not found.`)
            }
            this.options.methods = this.options.methods || {}
            this.options.methods[alias] = (...args)=>{
                return instance[method].bind(instance)(...args)
            }
        })
        return this
    }
}
