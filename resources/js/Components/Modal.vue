<script>
    export default {
        name: 'v-modal',
        props: {
            value: {
                default: null,
            },
            opacity: {
                type: Number,
                default: 0.5,
            },
            fullscreen: {
                type: Boolean,
                default: false,
            },
            transition: {
                type: String,
                default: 'zoomInOut',
            },
        },
        watch: {
            value: {
                handler(newVal, oldVal) {
                    if (newVal && !oldVal) {
                        document.body.style.overflowY = 'hidden'
                        window.addEventListener('keydown', this.onEscape)
                        this.$emit('opened')
                    } else if (!newVal && oldVal) {
                        document.body.style.overflowY = 'auto'
                        window.removeEventListener('keydown', this.onEscape)
                        this.$emit('closed')
                    }
                }
            },
        },
        computed: {
            maskStyles() {
                return {
                    background: `rgba(0, 0, 0, ${this.opacity})`
                }
            },
        },
        methods: {
            noScroll(event) {
                event.preventDefault()
            },
            onEscape(event) {
                if (event.keyCode === 27) {
                    this.toggle()
                }
            },
            toggle() {
                this.$emit('input', (this.value ? null : true))
            },
            hasSlot(name = 'default') {
                return !!this.$slots[name] || !!this.$scopedSlots[name];
            }
        },
    }
</script>
<template>
    <transition :name="transition">
        <div
            v-if="value" @click.exact="toggle" :style="maskStyles"
            class="v-modal-mask fixed flex flex-col justify-center content-center z-auto">
            <div class="card inline-flex flex-col shadow-2xl sm:h-auto sm:w-auto my-0 mx-auto v-modal-window"
                 :class="{fullscreen, 'max-w-3xl': !fullscreen}" @click.stop="">
                <div class="flex-shrink">
                    <div class="card-header flex flex-row">
                        <div class="flex-grow">
                            <slot name="title"/>
                        </div>
                        <div class="flex-shrink">
                            <button @click.prevent="toggle" class="btn-xs btn-rounded">
                                <i class="fa fa-times"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div  v-if="hasSlot('content')"
                      class="flex-grow overflow-y-scroll bg-gray-1000"
                      style="scroll-behavior: smooth">
                    <div class="card-content">
                        <slot name="content"/>
                    </div>
                </div>
                <div v-if="hasSlot('actions')" class="flex-shrink">
                    <div class="card-actions flex flex-row">
                        <slot name="actions"/>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="sass" scoped>
    .v-modal-mask
        z-index: 100 !important
        bottom: 0
        right: 0
        left: 0
        top: 0
        .v-modal-window
            min-width: 300px
            &.fullscreen
                height: 100vh !important
                width: 100vw !important
        .v-modal-enter, .v-modal-leave-active
            transition: all 160ms ease-in-out
            opacity: 0
            .v-modal-window
                transform: scale(0)
</style>
