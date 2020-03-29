<script>
    export default {
        name: "Action",
        props: {
            loading: {
                type: [Boolean, String, null],
                default: ()=>false,
            },
            focused: {
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
                const disabled = (this.loading || this.disabled)
                if(this.type === 'button' || disabled){
                    e.preventDefault()
                }
                if(!disabled){
                    this.$emit('click', e)
                }
            },
            focus(){
                this.$refs.button.focus()
            }
        },
        created() {
            if(this.focused){
                this.$nextTick(this.focus)
            }
        }
    }
</script>
<template>
    <button
        ref="button"
        :type="type"
        @click="onClick"
        :disabled="disabled"
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
