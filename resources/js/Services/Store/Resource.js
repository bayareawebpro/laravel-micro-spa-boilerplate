"use strict";
import Controller from "./Controller"
export default class Resource extends Controller {

    constructor(App) {
        super(App)
    }

    get resourceKey(){
        return 'test'
    }

    /**
     * Default Schema
     * @return {Object}
     */
    get schema() {
        return {
            resource: null,
            entity: null,
            loading: undefined,
        }
    }

    /**
     * Resource Index
     * Route Binding, Returns to caller
     * @param params {Object}
     * @return {Promise<any>}
     */
    async index(params = {}) {
        try {
            await this.$errors.clear()
            this.$state.set('loading', `${this.resourceKey}.index`)
            const {data} = await this.$http.get(`/api/${this.resourceKey}`, {params})
            await this.$state.set('resource', data)
            await this.$state.forget('loading')
        } catch (error) {
            await this.$state.forget('loading')
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    }

    /**
     * Create Entity
     * Route Binding, Returns to caller
     * @param params {Object}
     * @return {Promise<any>}
     */
    async create(params = {}) {
        try {
            await this.$errors.clear()
            this.$state.set('loading', `${this.resourceKey}.create`)
            const {data} = await this.$http.get(`/api/${this.resourceKey}/create`, {params})
            await this.$state.update(data)
            await this.$state.forget('loading')
        } catch (error) {
            await this.$state.forget('loading')
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    }

    /**
     * Show Entity
     * Route Binding, Returns to caller
     * @param id {Number}
     * @param params {Object}
     * @return {Promise<any>}
     */
    async show({id, ...params}) {
        try {
            await this.$errors.clear()
            this.$state.set('loading', `${this.resourceKey}.show`)
            const {data} = await this.$http.get(`/api/${this.resourceKey}/${id}`, {params})
            await this.$state.update(data)
            await this.$state.forget('loading')
        } catch (error) {
            await this.$state.forget('loading')
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    }

    /**
     * Edit Entity
     * Route Binding, Returns to caller
     * @param id {Number}
     * @param params {Object}
     * @return {Promise<any>}
     */
    async edit({id, ...params}) {
        try {
            await this.$errors.clear()
            this.$state.set('loading', `${this.resourceKey}.edit`)
            const {data} = await this.$http.get(`/api/${this.resourceKey}/${id}/edit`, {params})
            await this.$state.update(data)
            await this.$state.forget('editing')
            await this.$state.forget('loading')
        } catch (error) {
            await this.$state.forget('loading')
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    }

    /**
     * Save Entity Action
     * @param params {Object}
     * @param redirect {Boolean}
     * @return {Promise<any>}
     */
    async store(params, redirect = true) {
        try {
            await this.$errors.clear()
            this.$state.set('loading', `${this.resourceKey}.store`)

            const {data} = await this.$http.post(`/api/${this.resourceKey}`, params)
            await this.$state.update(data)
            await this.$state.forget('editing')
            await this.$state.forget('loading')

            if (redirect) {
                await this.$router.replace({
                    name: `${this.resourceKey}.index`,
                    query: {page: 1}
                }, () => null, () => null)
            }
        } catch (error) {
            await this.$state.forget('loading')
            this.handleError(error)
        }
    }

    /**
     * Update Entity Action
     * @param id {Number}
     * @param params {Object}
     * @param redirect {Boolean}
     * @return {Promise<any>}
     */
    async update({id, ...params}, redirect = true) {
        try {
            await this.$errors.clear()
            this.$state.set('loading', `${this.resourceKey}.update`)

            const {data} = await this.$http.put(`/api/${this.resourceKey}/${id}`, params)
            await this.$state.update(data)
            await this.$state.forget('updating')
            await this.$state.forget('loading')

            if (redirect) {
                await this.$router.go(-1, () => null, () => null)
            }
        } catch (error) {
            await this.$state.forget('loading')
            this.handleError(error)
        }
    }

    /**
     * Destroy Entity Action
     * @param entity {Object}
     * @param redirect {Boolean}
     * @return {Promise<any>}
     */
    async destroy(entity, redirect = true) {
        try {
            await this.$errors.clear()
            this.$state.set('loading', `${this.resourceKey}.destroy`)

            await this.$http.delete(`/api/${this.resourceKey}/${entity.id}`)
            await this.$state.rejectWhere('resource.data', 'id', entity.id)
            await this.$state.decrement('resource.pagination.total')
            await this.$state.forget('destroying')
            await this.$state.forget('loading')

            if (redirect) {
                await this.$router.replace({
                    name: `${this.resourceKey}.index`,
                    query: {page: 1}
                }, () => {}, () => this.index())
            }
        } catch (error) {
            await this.$state.forget('loading')
            this.handleError(error)
        }
    }
}
