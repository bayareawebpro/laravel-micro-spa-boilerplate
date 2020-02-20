import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
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
    }

    /**
     * Use a progress bar package.
     * @param loadProgressBar {Function}
     * @return {*}
     */
    useProgressBar(loadProgressBar){
        loadProgressBar(this.$client)
    }

    /**
     * Response Handler
     * @param response
     * @return {Promise<unknown>}
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
     * @return {Promise<unknown>}
     */
    onError(error) {
        if (!error.hasOwnProperty('response')) {
            this.$events.$emit('toast:error', {
                title: error.message || 'Network Error'
            })
            return Promise.reject(error)
        }
        if (error.response.data) {
            switch (error.response.status) {
                case 401:
                    this.$events.$emit('error:401');
                    this.$events.$emit('toast:warn', {
                        title: error.response.data.message || 'UnAuthorized.'
                    })
                    break;
                case 404:
                    this.$events.$emit('error:404');
                    this.$events.$emit('toast:error', {
                        title: error.response.data.message || 'Not Found.'
                    })
                    break;
                case 419:
                    this.$events.$emit('error:419');
                    this.$events.$emit('toast:error', {
                        title: error.response.data.message || 'Session Expired.'
                    })
                    break;
                case 422:
                    this.$events.$emit('error:422');
                    this.$events.$emit('toast:warn', {
                        title: error.response.data.message || 'Invalid.'
                    })
                    break;
                default:
                    this.$events.$emit('toast:error', {
                        title: error.response.data.message || 'Error.'
                    })
                    break;
            }
        }
        return Promise.reject(error)
    }



    /**
     * @param config {AxiosRequestConfig}
     */
    getUri(config) {
        return this.$client.getUri(config)
    }

    /**
     * @param config {AxiosRequestConfig}
     * @return {Promise<*|AxiosResponse<T>>}
     */
    async request(config) {
        return await this.$client.request(config)
    }

    /**
     * @param url {String}
     * @param config {AxiosRequestConfig}
     * @return {Promise<*>}
     */
    async get(url, config) {
        return await this.$client.get(url, config)
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {AxiosRequestConfig}
     * @return {Promise<*>}
     */
    async post(url, data, config) {
        return await this.$client.post(url, data, config)
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {AxiosRequestConfig}
     * @return {Promise<*>}
     */
    async put(url, data, config) {
        return await this.$client.put(url, data, config)
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {AxiosRequestConfig}
     * @return {Promise<*>}
     */
    async patch(url, data, config) {
        return await this.$client.patch(url, data, config)
    }

    /**
     * @param url {String}
     * @param data {Object}
     * @param config {AxiosRequestConfig}
     * @return {Promise<*>}
     */
    async delete(url, data, config) {
        return await this.$client.delete(url, data, config)
    }
}
