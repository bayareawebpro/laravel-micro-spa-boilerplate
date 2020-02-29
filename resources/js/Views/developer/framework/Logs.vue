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
    <div>
        <div class="card w-full text-sm mb-4">
            <div class="card-header flex">
                <div class="mr-auto">Framework Logs</div>
                <div>
                    <v-action @click="flush" class="btn-sm mr-1">
                        Flush
                    </v-action>
                    <v-action @click="debugging = !debugging" class="btn-sm">
                        {{ debugging ? 'Disable' : 'Enable'}}
                    </v-action>
                </div>
            </div>
            <div class="card-content">
                <v-console-output v-model="entries" :height="400"/>
            </div>
        </div>
    </div>
</template>
