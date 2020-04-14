<script>
    export default {
        name: "Widget",
        props: {
            value: {
                type: Object,
                required: true
            },
        }
    }
</script>
<template>
    <div class="bg-gray-800 text-gray-500 shadow rounded w-full h-full p-2 relative">
        <div class="absolute right-0 top-0 p-2">
            <v-action @click="$emit('remove')" class="btn btn-xs btn-red">
                x
            </v-action>
        </div>

        <slot></slot>
    </div>
</template>
