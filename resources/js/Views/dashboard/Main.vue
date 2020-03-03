<script>
    import WidgetLayout from "./Widgets/WidgetLayout"
    export default {
        name: "DashboardPage",
        components: {WidgetLayout},
    }
</script>
<template>
    <div>

        <widget-layout/>

        <hr>
        <h3>Markdown Pages</h3>
        <p>Lazy Loaded Once</p>
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
    </div>
</template>
