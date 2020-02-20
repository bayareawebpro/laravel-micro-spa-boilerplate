<script>
    export default {
        name: "Async",
        props:{
            value:{
                type: Boolean,
                required: false,
                default: false
            },
            message:{
                type: String,
                required: false,
                default: 'Loading...'
            },
        }
    }
</script>
<template>
    <div class="relative block">
        <transition name="fadeInDown" mode="out-in">
            <div key="loading" v-if="value" class="text-center overflow-hidden py-4">
                <div class="relative h-16">
                    <v-loading color="#4299e1"/>
                </div>
                <div class="text-xs">{{message}}</div>
            </div>
            <div key="slot" v-else>
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
