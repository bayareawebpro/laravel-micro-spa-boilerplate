
/**
 * @docs https://webpack.js.org/guides/dependency-management/#require-context
 * @example Autoloader.components(require.context('./../../Components',true,/\.vue$/));
 */
export default class AutoLoader{

    constructor(context) {
        this._context = context
    }

    static context(context){
        return new AutoLoader(context)
    }

    toObject(){
        const schema = {}
        this._context.keys().map((path) => {
            const abstract = this._context(path)
            const binding = this.toBaseName(path)
            schema[binding] = abstract.default || abstract
        })
        return schema
    }

    toObjectEntries(){
        return Object.entries(this.toObject())
    }

    toArray(){
        return this._context.keys().map((path) => {
            const abstract = this._context(path)
            return abstract.default || abstract
        })
    }

    each(callback){
        return this._context.keys().forEach((path) => {
            const abstract = this._context(path)
            const binding = this.toBaseName(path)
            callback(binding, abstract.default || abstract)
        })
    }

    components(callback){
        this._context.keys().forEach((path) => {
            const abstract = this._context(path)
            const tagName = this.toComponentName(path)
            callback(tagName, abstract.default || abstract)
        })
    }

    toBaseName(path){
        return path
            .replace(/^\.\//, '')
            .replace(/\.\w+$/, '')
            .split(/\//)
            .reduce((prev, current)=>current)
    }

    toComponentName(path){
        return 'v' + this.toBaseName(path)
            .replace(/([A-Z][a-z])/g,'-$1')
            .toLowerCase()
    }
}
