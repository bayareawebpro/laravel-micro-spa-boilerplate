export default class Route {

    /**
     * RouteLink Constructor
     * @param name {String}
     */
    constructor(name = null) {
        this.name = name
        this.hash = undefined
        this.params = {}
        this.query = {}
        this.props = {}
    }

    /**
     * Make new instance.
     * @param name {String}
     * @return {Route}
     */
    static link(name = null) {
        return new Route(name)
    }

    /**
     * Add parameters object
     * @param params {Object}
     * @return this
     */
    withParams(params) {
        this.params = params
        return this
    }

    /**
     * Add query object
     * @param query {Object}
     * @return this
     */
    withQuery(query) {
        this.query = query
        return this
    }

    /**
     * Add props object
     * @param props {Object}
     * @return this
     */
    withProps(props) {
        this.props = props
        return this
    }

    /**
     * Add hash string
     * @param hash {String}
     * @return this
     */
    withHash(hash) {
        this.hash = `#${hash}`
        return this
    }
}
