<script>
    export default {
        name: "Page",
        props:{
            slug: {type: String, required: true}
        },
        beforeCreate(){
            const {slug} = this.$options.propsData
            this.$bind.mapGetters('Pages', {
                page: slug,
            })
            this.$bind.mapActions('Pages', {
                show: 'show',
            })
            this.$nextTick(()=>this.show(this.slug))
        }
    }
</script>
<template>
    <v-async :show="page">
        <template v-slot:default>
            <div v-html="page"/>
        </template>
    </v-async>
</template>
