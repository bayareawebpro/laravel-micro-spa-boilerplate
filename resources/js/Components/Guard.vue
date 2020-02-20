<script>
    export default {
        name: "Guard",
        props: {
            allows:{
                type: Array,
                required: true,
            },
            permissions:{
                type: Object,
                required: true,
            },
        },
        watch:{
            isAllowed:{
                immediate: true,
                handler(isAllowed){
                    if(!isAllowed){
                        this.$emit('denied')
                    }
                }
            }
        },
        computed:{
            isAllowed(){
                return this.allows.filter((permission)=>this.permissions[permission]).length > 0
            }
        }
    }
</script>
<template>
    <div v-if="isAllowed">
        <slot/>
    </div>
</template>
