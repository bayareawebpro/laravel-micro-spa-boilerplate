<script>
	export default {
		name: 'Logs',
        data: ()=> ({
            entries: [],
        }),
        watch:{
		    '$app.logOutput':{
                deep: true,
		        immediate: true,
		        handler(logOutput){
                    this.entries = logOutput
                }
            }
        },
        computed:{
		    debugging:{
		        get(){
                    return this.$app._debug
                },
                set(){
                    this.$app._debug = !this.$app._debug
                }
            }
        },
		methods: {
			flush() {
                this.$app.logOutput = []
                this.entries = []
			},
		}
    }
</script>
<template>
    <div class="layout p-4 text-white">
        <div class="card w-full text-sm mb-4">
            <div class="card-header flex">
                Framework Logs
                <v-action @click="flush" class="btn-sm ml-auto">
                    Flush
                </v-action>
                <v-action @click="debugging = !debugging" class="btn-sm ml-auto">
                    {{ debugging ? 'Disable' : 'Enable'}}
                </v-action>
            </div>
            <div class="card-content">
                <v-console-output v-model="entries" :height="400"/>
            </div>
        </div>
    </div>
</template>
