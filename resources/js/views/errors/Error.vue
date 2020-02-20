<script>
    export default {
        name: "Error",
        computed:{
            status(){
                const {status} = this.$route.params
                return status || 404
            },
            message(){
                const {data} = this.$route.params
                return data ? data.message : 'The page you requested failed to render.'
            }
        },
        methods:{
            back(){
                this.$router.push({name: 'dashboard'})
            }
        }
    }
</script>
<template>
    <div class="layout-centered text-white">
        <div class="text-center">
            <h1><i class="fa fa-warning"/> Error {{ status }}</h1>
            <p class="pt-3">{{ message }} </p>
            <button @click="back" class="btn btn-lg mt-2">
                Go Back
            </button>
        </div>
    </div>
</template>
