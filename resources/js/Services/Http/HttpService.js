import Axios from 'axios'
export default class HttpService {

    constructor(Events) {
        this.$events = Events
        this.$client = Axios
        this.$client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        this.$client.defaults.withCredentials = true;
        this.$client.interceptors.response.use(
            this.onResponse.bind(this),
            this.onError.bind(this)
        )
        this.$client.interceptors.request.use(
            this.onRequest.bind(this),
            this.onError.bind(this)
        )
    }

    /**
     * Use a progress bar package.
     * @param loadProgressBar {Function}
     * @return {HttpService}
     */
    useProgressBar(loadProgressBar){
        loadProgressBar(this.$client)
        return this
    }

    /**
     * Response Handler
     * @param request {Object}
     * @return {Promise<*>}
     */
    onRequest(request) {
        return Promise.resolve(request)
    }

    /**
     * Response Handler
     * @param response
     * @return {Promise<*>}
     */
    onResponse(response) {
        const {data} = response
        if (data.message) {
            this.$events.$emit('toast:success', {
                title: data.message,
            })
        }
        return Promise.resolve(response)
    }

    /**
     * Error Handler
     * @param error {Error}
     * @return {Promise<*>}
     */
    onError(error) {
        if (!error.hasOwnProperty('response')) {
            this.$events.$emit('error:network', error);
            return Promise.reject(error)
        }
        if (error.response.data) {
            switch (error.response.status) {
                case 401:
                    this.$events.$emit('error:401', error.response);
                    break;
                case 403:
                    this.$events.$emit('error:403', error.response);
                    break;
                case 404:
                    this.$events.$emit('error:404', error.response);
                    break;
                case 419:
                    this.$events.$emit('error:419', error.response);
                    break;
                case 422:
                    this.$events.$emit('error:422', error.response);
                    break;
                case 503:
                    this.$events.$emit('error:503', error.response);
                    break;
                default:
                    this.$events.$emit('error:500', error.response)
                    break;
            }
        }
        return Promise.reject(error)
    }

    /**
     * @param config {Object}
     */
    getUri(config) {
        return this.$client.getUri(config)
    }

    /**
     * @param config {Object}
     * @return {Promise<*>}
     */
    async request(config) {
        return await this.$client.request(config)
    }

    /**
     * @param url {String}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async get(url, config) {
        return await this.$client.get(url, config)
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async post(url, data, config) {
        return await this.$client.post(url, data, config)
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async upload(url, data, config = {}) {
        const formData = new FormData;
        Object.entries(data).forEach(([key, value])=>{
            formData.append(key, value);
        })
        return await this.$client.post(url, formData, {
            ...config,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async put(url, data, config) {
        return await this.$client.put(url, data, config)
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async patch(url, data, config) {
        return await this.$client.patch(url, data, config)
    }

    /**
     * @param url {String}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async delete(url, config) {
        return await this.$client.delete(url, config)
    }
}
