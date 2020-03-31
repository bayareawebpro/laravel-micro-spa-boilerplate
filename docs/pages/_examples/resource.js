"use strict";
import Resource from "../Services/Store/Controller"
export default class TokenResource extends Controller {

    constructor(App) {
        super(App)
    }

    /**
     * Resource URI Key
     * @usage /api/{resourceKey}
     * @return {String}
     */
    get resourceKey(){
        return 'tokens'
    }

    /**
     * Default Schema
     * @return {Object}
     */
    get schema() {
        return {
            entity: null,
            loading: null,
            editing: null,
            destroying: null,
            resource: null,
        }
    }

    /**
     * Resource Index
     * Route Binding, Returns to caller
     * @param params {Object}
     * @return {Promise<*>}
     */
    async index(params = {}) {
        try {
            await this.$errors.clear()
            await this.$state.set('loading', `${this.resourceKey}.index`)

            const {data} = await this.$http.get(`/api/${this.resourceKey}`, {params})

            await this.$state
                .set('resource', data)
                .forget('loading')

        } catch (error) {
            return Promise.reject(this.handleError(error))  //Return errors.
        }
    }


    /**
     * Create Entity
     * Route Binding, Returns to caller
     * @param params {Object}
     * @return {Promise<*>}
     */
    async create(params = {}) {
        try {
            await this.$errors.clear()
            await this.$state.set('loading', `${this.resourceKey}.create`)

            const {data} = await this.$http.get(`/api/${this.resourceKey}/create`, {params})

            await this.$state
                .update(data)
                .forget('loading')
        } catch (error) {
            return Promise.reject(this.handleError(error))  //Return errors.
        }
    }

    /**
     * Show Entity
     * Route Binding, Returns to caller
     * @param id {Number}
     * @param params {Object}
     * @return {Promise<*>}
     */
    async show({id, ...params}) {
        try {
            await this.$errors.clear()
            await this.$state.set('loading', `${this.resourceKey}.show`)

            const {data} = await this.$http.get(`/api/${this.resourceKey}/${id}`, {params})

            await this.$state
                .update(data)
                .forget('loading')

        } catch (error) {
            return Promise.reject(this.handleError(error)) //Return errors.
        }
    }

    /**
     * Edit Entity
     * Route Binding, Returns to caller
     * @param id {Number}
     * @param params {Object}
     * @return {Promise<*>}
     */
    async edit({id, ...params}) {
        try {
            await this.$errors.clear()
            await this.$state.set('loading', `${this.resourceKey}.edit`)

            const {data} = await this.$http.get(`/api/${this.resourceKey}/${id}/edit`, {params})

            await this.$state
                .update(data)
                .forget('loading')
                .forget('editing')
        } catch (error) {
            return Promise.reject(this.handleError(error))  //Return errors.
        }
    }

    /**
     * Save Entity Action, Swallow Errors
     * @param params {Object}
     * @param redirect {Boolean}
     * @return {Promise<*>}
     */
    async store(params, redirect = true) {
        try {
            await this.$errors.clear()
            await this.$state.set('loading', `${this.resourceKey}.store`)

            const {data} = await this.$http.post(`/api/${this.resourceKey}`, params)

            await this.$state
                .update(data)
                .forget('loading')
                .forget('editing')

            await this.updateCollectionEntity(data.entity)
            await this.reloadCollection(redirect)

        } catch (error) {
            await this.handleError(error) //Swallow Errors
        }
    }

    /**
     * Update Entity Action
     * @param id {Number}
     * @param params {Object}
     * @param redirect {Boolean}
     * @return {Promise<*>}
     */
    async update({id, ...params}, redirect = true) {
        try {
            await this.$errors.clear()
            await this.$state.set('loading', `${this.resourceKey}.update`)

            const {data} = await this.$http.put(`/api/${this.resourceKey}/${id}`, params)

            await this.$state.update(data)
                .forget('editing')
                .forget('loading')

            await this.updateCollectionEntity(data.entity)
            await this.reloadCollection(redirect)

        } catch (error) {
            await this.handleError(error) //Swallow Errors
        }
    }

    /**
     * Destroy Entity Action, Swallow Errors
     * @param entity {Object}
     * @param redirect {Boolean}
     * @return {Promise<*>}
     */
    async destroy(entity, redirect = true) {
        try {
            await this.$errors.clear()
            await this.$state.set('loading', `${this.resourceKey}.destroy`)

            await this.$http.delete(`/api/${this.resourceKey}/${entity.id}`)

            await this.$state
                .forget('destroying')
                .forget('loading')

            await this.removeCollectionEntity(entity)
            await this.reloadCollection(redirect)

        } catch (error) {
            await this.handleError(error) //Swallow Errors
        }
    }

    /**
     * Update Existing Entity in Collection
     * @param entity {Object}
     */
    updateCollectionEntity(entity) {
        if (this.$state.hasEntries('resource.data')) {
            if (this.$state.firstWhere('resource.data', 'id', entity.id)) {
                this.$state.mergeWhere('resource.data', 'id', entity)
            } else {
                this.$state.append('resource.data', entity)
            }
        }
    }

    /**
     * Remove Existing Entity in Collection
     * @param entity {Object}
     */
    removeCollectionEntity(entity) {
        if (this.$state.hasEntries('resource.data')) {
            if (this.$state.firstWhere('resource.data', 'id', entity.id)) {
                this.$state
                    .rejectWhere('resource.data', 'id', entity)
                    .decrement('resource.pagination.total')
            }
        }
    }

    /**
     * Reload Collection
     * @param redirect {Boolean}
     */
    reloadCollection(redirect) {
        if (redirect) {
            if (redirect instanceof Route) {
                this.$request.replace(redirect)
            } else {
                this.$request.replace(
                    this.$link(`${this.resourceKey}.index`)
                        .withQuery({page: 1}),
                    () => null, () => this.index())
            }
        }
    }
}
