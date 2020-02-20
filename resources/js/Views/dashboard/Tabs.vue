<script>
    export default {
        name: "Dashboard",
        beforeCreate() {
        },
    }
</script>
<template>
    <div class="layout p-4">

        <v-tabs :tabs="['step1','step2','step3']" active="step1" :hash="true">
            <template v-slot:step1_label>Step 1</template>
            <template v-slot:step1_content>Step 1 Content</template>

            <template v-slot:step2_label>Step 2</template>
            <template v-slot:step2_content>Step 2 Content</template>

            <template v-slot:step3_label>Step 3</template>
            <template v-slot:step3_content>Step 3 Content</template>
        </v-tabs>

        <p><v-action class="btn" >asd</v-action></p>
    </div>
</template>
