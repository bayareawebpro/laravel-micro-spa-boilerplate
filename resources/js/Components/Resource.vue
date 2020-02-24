<script>
    export default {
        name: "Resource",
        props: {
            value: {
                default:()=>({
                    pagination:{},
                    options:{},
                    query:{},
                    data:[],
                })
            },
            searchable: {required: true},
        },
        computed: {
            pagination(){
                return this.value.pagination || {}
            },
            page() {
                return Number(this.$route.query.page || this.pagination.current_page || 1)
            }
        },
        methods:{
            filter(newQuery, merge = true){
                let route = {query: {...this.$route.query}}
                if(merge){
                    route.query = {...route.query, ...newQuery}
                }
                this.$router.push(route,
                    () => this.$emit('updated'),
                    (e) => this.$emit('failed',e)
                )
            },
            prevPage() {
                if (this.value.pagination && this.pagination.isFirstPage) return;
                this.filter({page: this.page - 1})
            },
            nextPage() {
                if (this.value.pagination && this.pagination.isLastPage) return;
                this.filter({page: this.page + 1})
            },
        }
    }
</script>
<template>
    <div class="text-white" v-if="value">
        <div class="flex mb-2">
            <div class="hidden sm:block flex-shrink self-center mr-3 text-blue-200">
                <slot name="title">Resource</slot>
            </div>
            <div class="flex-grow mr-3">
                <div class="element">
                    <label for="search" class="hidden" aria-hidden="true">
                        Search
                    </label>
                    <div class="relative">
                        <input
                            dusk="search"
                            id="search"
                            type="search"
                            name="search"
                            class="input icon"
                            v-model="value.query.search"
                            placeholder="Search..."
                            @keydown.enter="filter({search: value.query.search, page: 1})">
                        <i class="fa fa-search"></i>
                    </div>
                </div>
            </div>
            <div class="flex-shrink self-center">
                <slot
                    name="actions"
                    :pagination="value.pagination"
                    :options="value.options"
                    :query="value.query"
                    :filter="filter"
                />
            </div>
        </div>
        <div class="grid mt-2 mb-4">
            <div v-for="(options, prop) in value.options" class="grid-item w-1/2 sm:w-auto">
                <v-input-select
                    type="select"
                    class="input-sm"
                    :name="prop"
                    :options="options"
                    v-model="value.query[prop]"
                    @change="filter({...value.query, page: 1})">
                </v-input-select>
            </div>
        </div>
        <div v-if="value.data.length">
            <slot name="entries" :entries="value.data"/>
            <div class="grid mt-4">
                <div class="grid-item pr-1">
                    <v-action
                        dusk="prevPage"
                        @click="prevPage"
                        :disabled="pagination.isFirstPage">
                        <i class="fa fa-chevron-left"/> Prev
                    </v-action>
                </div>
                <div class="grid-item pl-1">
                    <v-action
                        dusk="nextPage"
                        @click="nextPage"
                        :disabled="pagination.isLastPage">
                        Next <i class="fa fa-chevron-right"/>
                    </v-action>
                </div>
                <div
                    v-if="pagination.current_page && pagination.last_page"
                    class="grid-item text-xs text-gray-500 hidden sm:block">
                    Page <strong>{{ pagination.current_page }}</strong>
                    of <strong>{{ pagination.last_page }}</strong>
                </div>
                <div
                    v-if="pagination.total"
                    class="grid-item text-xs text-gray-500 hidden sm:block">
                    <strong>{{ pagination.total }}</strong> Total Entities
                </div>
            </div>
        </div>
        <div v-else class="alert info">
            No Results.
        </div>
    </div>
</template>
