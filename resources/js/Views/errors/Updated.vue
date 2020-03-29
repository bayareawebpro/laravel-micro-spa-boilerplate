<script>
    export default {
        name: "AppUpdate",
        methods:{
            reload(){
                window.location = window.location.hostname
            }
        }
    }
</script>
<template>
    <div class="layout-centered text-white">
        <div class="text-center">
            <h1><i class="fa fa-warning"/> Application Update Available</h1>
            <p class="pt-3">A new version of the application has been released:</p>

            <button @click="reload" class="btn btn-lg mt-2">
                Reload
            </button>
        </div>
    </div>
</template>
