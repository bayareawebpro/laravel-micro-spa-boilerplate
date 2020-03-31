<script>
    export default {
        name: "Collapse",
        props: {
            value: {default: false},
            active: {default: true},
            transition: {default: 'fadeInLeft'},
            classes: {default: 'btn btn-block'},
        },
        computed: {
            isActive() {
                return this.value === this.active
            }
        },
        methods: {
            activate() {
                if (this.isActive) {
                    this.$emit('input', false)
                } else {
                    this.$emit('input', this.active)
                }
                setTimeout(()=>this.$scrollTo(this.$refs.title),100)
            },
        }
    }
</script>
<template>
    <div>
        <div role="button" @click.prevent="activate" class="pointer-cursor" :class="classes"  ref="title">
            <div class="flex flex-row">
                <div class="flex-grow">
                    <slot name="title" :activate="activate">Toggle</slot>
                </div>
                <div class="flex-shrink ml-auto">
                    <i
                        class="fa text-xs text-gray-500"
                        :class="isActive ? 'fa-minus' : 'fa-plus'"
                    />
                </div>
            </div>
        </div>
        <transition :name="transition" mode="out-in">
            <div v-if="isActive">
                <slot name="default"></slot>
            </div>
        </transition>
    </div>
</template>
