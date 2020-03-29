<script>
    export default {
        name: "Animated",
        data: ()=>({active: false}),
        props: {
            name:{type: String, default: ()=> 'zoomInOut'},
            duration:{type: Number, default: ()=> 300},
            delay:{type: Number, default: ()=> 0},
        },
        created() {
            setTimeout(()=>this.active = true, this.delay)
        }
    }
</script>
<template>
    <transition :name="name" mode="in-out" :duration="duration">
        <div v-if="active">
            <slot></slot>
        </div>
    </transition>
</template>
