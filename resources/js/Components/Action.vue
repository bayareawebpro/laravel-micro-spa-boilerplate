<script>
    export default {
        name: "Action",
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
            type: {
                type: [String],
                default: ()=>'button',
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
        :type="type"
        :disabled="disabled"
        @click.prevent="onClick"
        class="btn overflow-hidden"
        :class="{disabled, loading}">
        <transition name="fadeInRight" mode="out-in">
            <div class="relative">
                <v-loading v-if="loading"/>
                <div v-else>
                    <slot />
                </div>
            </div>
        </transition>
    </button>
</template>
