<script>
    export default {
        name: "Tabs",
        data: ()=>({
            loading: true,
        }),
        methods:{
            load(val = true){
                this.loading = val
                setTimeout(()=>this.loading = false, 3000)
            }
        },
        mounted(){
            setTimeout(()=>this.loading = false, 3000)
        }
    }
</script>
<template>
    <div>
        <div>
            <h1 class="page-title">Tabs</h1>
            <hr>
            <v-tabs
                :vertical="true"
                :tabs="['step1','step2','step3']" value="step1" class="mt-4">
                <template v-slot:title>
                    <i class="fa fa-sliders"></i> Settings
                </template>
                <template v-slot:step1_label>Description</template>
                <template v-slot:step1_content>
                    <p>It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. </p>
                </template>

                <template v-slot:step2_label>Attributes</template>
                <template v-slot:step2_content>Attributes Content</template>

                <template v-slot:step3_label>Metadata</template>
                <template v-slot:step3_content>Metadata Content</template>
            </v-tabs>

            <v-tabs
                :vertical="false"
                :tabs="['step1','step2','step3']" value="step2" class="mt-4">
                <template v-slot:title>
                    <i class="fa fa-sliders"></i> Control Panel
                </template>
                <template v-slot:step1_label>Content</template>
                <template v-slot:step1_content>Content</template>

                <template v-slot:step2_label>Attributes</template>
                <template v-slot:step2_content>
                    <div class="list-group">
                        <div class="list-group-item">
                            Item 1
                        </div>
                        <div class="list-group-item">
                            Item 2
                        </div>
                    </div>
                </template>

                <template v-slot:step3_label>Metadata</template>
                <template v-slot:step3_content>Metadata Content</template>
            </v-tabs>
        </div>
    </div>
</template>
