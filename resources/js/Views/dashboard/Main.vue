<script>
    import WidgetLayout from "./Widgets/WidgetLayout"
    export default {
        name: "DashboardPage",
        components: {WidgetLayout},
    }
</script>
<template>
    <div>
        <v-tabs
            :vertical="false"
            :tabs="['page1','page2','page3']" value="page1" class="mt-4">
            <template v-slot:title>
                <i class="fa fa-sliders"></i> Markdown
            </template>
            <template v-slot:page1_label>Page 1</template>
            <template v-slot:page1_content>
                <v-page slug="test"/>
            </template>
            <template v-slot:page2_label>Page 2</template>
            <template v-slot:page2_content>
                <v-page slug="test2"/>
            </template>
            <template v-slot:page3_label>Page 3</template>
            <template v-slot:page3_content>
                <v-page slug="test3"/>
            </template>
        </v-tabs>
    </div>
</template>
