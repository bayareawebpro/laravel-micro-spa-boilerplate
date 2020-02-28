<script>
    export default {
        name: "DashboardPage",
    }
</script>
<template>
    <v-tabs
        :vertical="false"
        :tabs="['step1','step2','step3']" value="step2" class="mt-4">

        <template v-slot:title>
            <i class="fa fa-sliders"></i> Markdown
        </template>

        <template v-slot:step1_label>Content</template>
        <template v-slot:step1_content>
            <v-page slug="test"/>
        </template>

        <template v-slot:step2_label>Attributes</template>
        <template v-slot:step2_content>
            <v-page slug="test2"/>
        </template>

        <template v-slot:step3_label></template>
        <template v-slot:step3_content>
            <v-page slug="test3"/>
        </template>
    </v-tabs>
</template>
