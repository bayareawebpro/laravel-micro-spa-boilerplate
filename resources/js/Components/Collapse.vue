<script>
    export default {
        name: "Collapse",
        props:{
            value: {default: false},
        },
        data(){
            return {
                state: this.value
            }
        },
        watch:{
            value:{
                handler(newValue){
                    this.activate(newValue)
                }
            }
        },
        methods:{
            activate(value = !this.state) {
                this.$emit('input', this.state = value)
            },
        }
    }
</script>
<template>
    <div class="collapse">
        <button type="button" @click.prevent="activate()" class="flex sidebar-header">
            <slot name="title">asd</slot>
            <span class="ml-auto">{{ state ? '-' : '+'}}</span>
        </button>
        <transition name="fadeInDown">
            <div v-if="state" class="mt-2">
               <slot name="default"></slot>
            </div>
        </transition>
    </div>
</template>
