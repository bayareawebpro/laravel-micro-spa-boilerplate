<script>
    export default {
        name: "Cards",
        data: ()=>({
            loading: true,
        }),
        methods:{
            load(val = true){
                this.loading = val
                setTimeout(()=>this.loading = false, 1000)
            }
        },
        mounted(){
            this.load()
        }
    }
</script>
<template>
    <div>
        <div>
            <h1 class="page-title">Cards</h1>
            <hr>
            <div class="card">
                <div class="card-header bg-gray-800">
                    <div><i class="fa fa-header"></i> Header</div>
                </div>
                <div class="card-content">
                    <v-async v-model="loading" message="Async Loading...">
                        <template v-slot:default>
                            <h1 class="page-Title">Page Title</h1>
                            <p class="page-lead">Page Lead</p>
                            <hr>
                            <p>
                                It is often helpful to have different configuration values based on the
                                environment where the application is running. For example, you may wish
                                to use a different cache driver locally than you do on your production server.
                            </p>
                        </template>
                    </v-async>
                </div>
                <div class="card-actions">
                    <v-action
                        :disabled="loading"
                        @click="load(true)"
                        class="btn btn-xs ml-auto btn-blue">
                        <i class="fa fa-clock"></i> Load
                    </v-action>
                </div>
            </div>

            <div class="card mt-4">
                <div class="card-header bg-gray-800">
                    <div><i class="fa fa-header"></i> ListGroup Card</div>
                </div>
                <div class="list-group rounded-none">
                    <div class="list-group-item">
                        Item 1
                    </div>
                    <div class="list-group-item">
                        Item 2
                    </div>
                    <div class="list-group-item">
                        Item 3
                    </div>
                    <div class="list-group-item">
                        Item 4
                    </div>
                </div>
            </div>

            <div class="grid">
                <div class="grid-item w-full sm:w-1/2">
                    <div class="list-group mt-4">
                        <div class="list-group-item">
                            Item 1
                        </div>
                        <div class="list-group-item">
                            Item 2
                        </div>
                    </div>
                </div>
                <div class="grid-item w-full sm:w-1/2">
                    <div class="list-group mt-4">
                        <div class="list-group-item">
                            Item 1
                        </div>
                        <div class="list-group-item">
                            Item 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
