<script>
    export default {
        name: "FormAction",
        props: {
            loading: {
                type: [Boolean, String, null],
                default: ()=>false,
            },
            focus: {
                type: [Boolean],
                default: ()=>false,
            },
            disabled: {
                type: [Boolean],
                default: ()=>false,
            },
        },
        methods:{
            onClick(e){
                this.$emit('click', e)
            },
        },
        created() {
            if(this.focus){
                this.$nextTick(()=>this.$refs.button.focus())
            }
        }
    }
</script>
<template>
    <button
        ref="button"
        @click.prevent="onClick"
        class="btn overflow-hidden"
        :class="{disabled, loading}"
        :disabled="disabled">
        <transition name="fadeInRight" mode="out-in" :duration="60">
            <v-loading v-if="loading"/>
            <div v-else>
                <slot />
            </div>
        </transition>
    </button>
</template>
