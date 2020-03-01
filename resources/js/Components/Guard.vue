<script>
    export default {
        name: "Guard",
        props: {
            roles:{
                type: Array,
                required: true,
                default: ()=>[],
            },
        },
        beforeCreate() {
            /** @property userRole */
            this.$bind.mapGetters('Auth', {
                userRole: 'entity.role',
            })
        }
    }
</script>
<template>
    <div v-if="roles.includes(userRole)">
        <slot/>
    </div>
</template>
