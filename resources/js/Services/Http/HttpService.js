import axios from 'axios'
import {loadProgressBar} from 'axios-progress-bar'
require('axios-progress-bar/dist/nprogress.css')
export default class HttpService {

    constructor(Events) {
        this.$events = Events
        this.$client = axios
        this.$client.defaults.withCredentials = true
        this.$client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        this.$client.interceptors.response.use(
            this.onResponse.bind(this),
            this.onError.bind(this)
        )
        this.$client.interceptors.request.use(
            this.onRequest.bind(this),
            this.onError.bind(this)
        )
        loadProgressBar()
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
        if (error.hasOwnProperty('response') && error.response.hasOwnProperty('data')) {
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
                return Promise.reject(error)
            }
        }
        this.$events.$emit('error:network', error);
        return Promise.reject(error)
    }

    /**
     * Get URI
     * @param config {Object}
     */
    getUri(config) {
        return this.$client.getUri(config)
    }

    /**
     * Generic Request
     * @param config {Object}
     * @return {Promise<*>}
     */
    async request(config) {
        return await this.$client.request(config)
    }

    /**
     * Get Request
     * @param url {String}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async get(url, config) {
        return await this.$client.get(url, config)
    }

    /**
     * Post Request
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async post(url, data, config = {}) {
        return await this.$client.post(url, data, config)
    }

    /**
     * Post Upload Request
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async postUpload(url, data, config = {}) {
        const formData = this.makeFormData(data)
        formData.append('_method', 'post');
        return await this.$client.post(url, formData, {
            ...config,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    /**
     * Put Upload Request
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async putUpload(url, data, config = {}) {
        const formData = this.makeFormData(data)
        formData.append('_method', 'put');
        return await this.$client.post(url, formData, {
            ...config,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    /**
     * To Form Data
     * @param data {Object}
     * @return {FormData}
     */
    makeFormData(data){
        const formData = new FormData;
        for (const prop in data) {
            if(data.hasOwnProperty(prop)){
                formData.append(prop, data[prop]);
            }
        }
        return formData
    }

    /**
     * Put Request
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async put(url, data, config) {
        return await this.$client.put(url, data, config)
    }

    /**
     * Patch Request
     * @param url {String}
     * @param data {Object}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async patch(url, data, config) {
        return await this.$client.patch(url, data, config)
    }

    /**
     * Delete Request
     * @param url {String}
     * @param config {Object}
     * @return {Promise<*>}
     */
    async delete(url, config) {
        return await this.$client.delete(url, config)
    }
}
