export default {

    /**
     * Resource Index
     * Route Binding, Returns to caller
     * @param params {Object}
     * @return {Promise<any>}
     */
    async index(params = {}) {
        try {
            const {data} = await this.$http.get(`/api/${this.resourceKey}`, {params})
            return await this.$state.set('resource', data)
        } catch (error) {
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    },

    /**
     * Create Entity
     * Route Binding, Returns to caller
     * @param params {Object}
     * @return {Promise<any>}
     */
    async create(params = {}) {
        try {
            await this.$errors.clear()
            const {data} = await this.$http.get(`/api/${this.resourceKey}/create`, {params})
            await this.$state.update(data)
        } catch (error) {
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    },

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
            const {data} = await this.$http.get(`/api/${this.resourceKey}/${id}`, {params})
            await this.$state.update(data)
        } catch (error) {
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    },

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
            const {data} = await this.$http.get(`/api/${this.resourceKey}/${id}/edit`, {params})
            await this.$state
                .update(data)
                .forget('editing')
        } catch (error) {
            return Promise.reject(this.handleError(error)) //Return to caller.
        }
    },

    /**
     * Save Entity Action
     * @param params {Object}
     * @param redirect {Boolean}
     * @return {Promise<any>}
     */
    async store(params, redirect = true) {
        try {
            const {data} = await this.$http.post(`/api/${this.resourceKey}`, params)
            await this.$state
                .update(data)
                .forget('creating')
            if (redirect) {
                await this.$router.replace({
                    name: `${this.resourceKey}.index`,
                    query: {page: 1}
                }, () => null, () => null)
            }
        } catch (error) {
            this.handleError(error)
        }
    },

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
            const {data} = await this.$http.put(`/api/${this.resourceKey}/${id}`, params)
            await this.$state
                .update(data)
                .forget('updating')
            if (redirect) {
                await this.$router.replace({
                    name: `${this.resourceKey}.index`,
                    query: {page: 1}
                }, () => null, () => null)
            }
        } catch (error) {
            this.handleError(error)
        }
    },

    /**
     * Destroy Entity Action
     * @param entity {Object}
     * @param redirect {Boolean}
     * @return {Promise<any>}
     */
    async destroy(entity, redirect = true) {
        try {
            await this.$http.delete(`/api/${this.resourceKey}/${entity.id}`)
            await this.$state
                .rejectWhere('resource.data', 'id', entity.id)
                .decrement('resource.pagination.total')
                .forget('destroying')
            if (redirect) {
                await this.$router.replace({
                    name: `${this.resourceKey}.index`,
                    query: {page: 1}
                }, () => {}, () => this.index())
            }
        } catch (error) {
            this.handleError(error)
        }
    }
}
