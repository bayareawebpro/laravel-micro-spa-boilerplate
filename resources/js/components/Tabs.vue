<script>
    export default {
        name: 'Tabs',
        props: {
            tabs: Array,
            vertical: {type: Boolean, default: ()=>false},
            right: {type: Boolean, default: ()=>false},
            hash: {type: Boolean, default: ()=>false},
            value:{type: String, default: ()=>null},
        },
        watch:{
            value:{
                handler(newVal){
                    this.activate(newVal)
                }
            }
        },
        data() {
            return {activeTab: this.value}
        },
        methods: {
            isActive(tab) {
                return this.activeTab === tab
            },
            activate(newVal) {
                this.activeTab = this.tabs.find((tab)=>tab === newVal) || this.tabs[0]
            }
        }
    }
</script>
<template>
    <div class="card card-tabs" :class="{'tabs-vertical': vertical}">
        <div class="card-header bg-gray-800">
            <nav class="tabs">
                <div v-if="$slots.title" class="tabs-title">
                    <slot name="title"></slot>
                </div>
                <div v-for="tab in tabs" class="tab-link">
                    <v-action
                        class="btn-sm"
                        :disabled="isActive(tab)"
                        @click.prevent="activate(tab)"
                        :class="{active: isActive(tab)}">
                        <slot :name="`${tab}_label`">
                            {{tab}}
                        </slot>
                    </v-action>
                </div>
            </nav>
        </div>
        <div class="card-content overflow-x-hidden">
            <transition name="fadeInLeft" mode="out-in">
                <div :key="activeTab">
                    <slot :name="`${activeTab}_content`">{{activeTab}}</slot>
                </div>
            </transition>
        </div>
    </div>
</template>
