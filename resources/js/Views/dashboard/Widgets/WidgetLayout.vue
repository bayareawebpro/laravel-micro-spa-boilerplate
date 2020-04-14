<script>
    /** @docs https://github.com/jbaysolutions/vue-grid-layout*/
    import Widget from "./Widget"
    import {GridLayout, GridItem} from 'vue-grid-layout'
    export default {
        name: "widget-layout",
        components: {GridLayout, GridItem, Widget},
        data: () => ({
            loading: false,
            selected: 'widget',
            layout: [],
            options: [
                {
                    label: 'My Comp',
                    value: 'widget',
                    settings: {},
                }
            ],
        }),
        methods: {
            fetch() {
                this.loading = true
                this.$app
                    .make('Http')
                    .get('/dashboard/layout')
                    .then(({data}) => this.layout = data)
                    .finally(() => this.loading = false)
            },
            save() {
                this.loading = true
                this.$app
                    .make('Http')
                    .post('/dashboard/layout', {layout: this.layout})
                    .then(({data}) => this.layout = data)
                    .finally(() => this.loading = false)
            },
            add() {
                const {value, settings} = this.options.find(({value}) => value === this.selected)
                this.layout.unshift({
                    i: Math.random() * Math.random(),
                    x: 0, y: 0, w: 1, h: 1,
                    component: value,
                    settings: settings
                })
            },
            remove(id) {
                const index = this.layout.findIndex(({i}) => i === id)
                this.layout.splice(index, 1)
            }
        }
    }
</script>
<template>
    <div>
        <v-action @click="add" class="btn btn-sm btn-blue">
            Add
        </v-action>
        <v-action @click="save" :loading="loading" class="btn btn-sm btn-blue">
            Save
        </v-action>
        <grid-layout
            :col-num="4"
            :row-height="120"
            :margin="[0, 0]"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :use-css-transforms="true"
            :layout.sync="layout">
            <grid-item
                v-for="(item) in layout"
                :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="`widget-${item.i}`">
                <component
                    :key="item.i"
                    :is="item.component"
                    v-model="item.settings"
                    @remove="remove(item.i)">
                    {{ item.i }}
                </component>
            </grid-item>
        </grid-layout>
    </div>
</template>
