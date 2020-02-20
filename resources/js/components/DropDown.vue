<script>
    export default {
        name: "DropDown",
        props: {
            value: {required: true, default: () => false},
            width: {required: false, default: () => 180}
        },
        watch:{
            $route:'close'
        },
        methods: {
            close(e) {
                this.$emit('input', false);
            },
        },
    }
</script>
<template>
    <div>
        <transition name="fadeInOut" mode="out-in" :duration="60">
            <div
                v-show="value"
                class="bg-black opacity-25 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-40"
                @click.stop="close">
            </div>
        </transition>
        <transition name="fadeInDown" mode="out-in" :duration="60">
            <div
                v-show="value"
                class="rounded opacity-100 text-xs shadow-lg mt-1 p-3 bg-gray-800 absolute right-0 left-auto w-full z-50"
                :style="{width: `${width}px`, maxWidth: `${width}px`}">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
