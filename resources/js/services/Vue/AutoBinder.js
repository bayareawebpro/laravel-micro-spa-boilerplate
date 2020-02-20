export default {
    install(Vue, {app}) {
        Object.defineProperty(Vue.prototype, '$bind', {
            configurable: true,
            get() {
                this.$options.computed = this.$options.computed || {}
                this.$options.methods = this.$options.methods || {}
                return new AutoBinder(app).bindTo(this.$options)
            }
        })
    },
}
class AutoBinder {

    /**
     * AutoBinder Constructor
     * @param App {Container}
     */
    constructor(App) {
        this.$app = App
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
     * Map Root State
     * @param alias {String}
     * @param propMap {Object}
     * @return this
     */
    mapState(alias, propMap) {
        const instance = this.$app.make(alias)
        Object.entries(propMap).forEach(([alias, callbackOrProp]) => {
            this.options.computed = this.options.computed || {}
            this.options.computed[alias] = {
                get: ()=> typeof callbackOrProp === 'function' ? callbackOrProp(instance) : instance[callbackOrProp],
                set: (val)=> instance[callbackOrProp] = val,
                cache: true,
            }
        })
        return this
    }

    /**
     * Map Actions
     * @param alias {String}
     * @param actionMap {Object}
     * @return this
     */
    mapActions(alias, actionMap) {
        const instance = this.$app.make(alias)
        Object.entries(actionMap).forEach(([alias, method]) => {
            if (typeof instance[method] !== 'function') {
                throw new Error(`mapAction ${alias} => ${method} not found.`)
            }
            this.options.methods = this.options.methods || {}
            this.options.methods[alias] = (...args)=>{
                return instance[method].bind(instance)(...args)
            }
        })
        return this
    }

    /**
     * Map Getters
     * @param alias {String}
     * @param propMap {Object}
     * @return this
     */
    mapGetters(alias, propMap) {
        const instance = this.$app.make(alias)
        Object.entries(propMap).forEach(([alias, accessor]) => {
            this.options.computed = this.options.computed || {}
            if(typeof (instance.$state || instance).get !== 'function'){
                throw new Error(`${alias} does not provide a get/set interface.`)
            }
            this.options.computed[alias] = {
                set: (val) => (instance.$state || instance).set(accessor, val),
                get: () => (instance.$state || instance).get(accessor),
                cache: true,
            }
        })
        return this
    }
}
