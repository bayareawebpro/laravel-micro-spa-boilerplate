<script>
    export default {
        name: "Tabs",
        data(){
            return {

            }
        }
    }
</script>
<template>
    <div>
        <h1 class="page-title">Actions</h1>

        <v-action class="btn-green">
            <i class="fa fa-check-circle"></i>
            Green
        </v-action>

        <hr>


        <div class="my-4">
            <v-action class="btn-green">Green</v-action>
            <v-action class="btn-purple">Purple</v-action>
            <v-action class="btn-indigo">Indigo</v-action>
            <v-action class="btn-blue">Blue</v-action>
            <v-action class="btn-yellow">Gold</v-action>
            <v-action class="btn-red">Red</v-action>
            <v-action class="btn-gray">Gray</v-action>
            <v-action>Default</v-action>

            <hr>
            <h3 class="mb-1">Disabled</h3>

            <v-action class="btn-green" :disabled="true">Green</v-action>
            <v-action class="btn-purple" :disabled="true">Purple</v-action>
            <v-action class="btn-indigo" :disabled="true">Indigo</v-action>
            <v-action class="btn-blue" :disabled="true">Blue</v-action>
            <v-action class="btn-yellow" :disabled="true">Gold</v-action>
            <v-action class="btn-red" :disabled="true">Red</v-action>
            <v-action class="btn-gray" :disabled="true">Gray</v-action>
            <v-action :disabled="true">Default</v-action>

            <hr>
            <h3 class="mb-1">Active</h3>

            <v-action class="btn-green active">Green</v-action>
            <v-action class="btn-purple active">Purple</v-action>
            <v-action class="btn-indigo active">Indigo</v-action>
            <v-action class="btn-blue active">Blue</v-action>
            <v-action class="btn-yellow active">Gold</v-action>
            <v-action class="btn-red active">Red</v-action>
            <v-action class="btn-gray active">Gray</v-action>
            <v-action class="active">Default</v-action>

            <hr>
            <h3 class="mb-1">Loading</h3>
            <v-action :loading="true" class="btn-green">Green</v-action>
            <v-action :loading="true" class="btn-purple">Purple</v-action>
            <v-action :loading="true" class="btn-indigo">Indigo</v-action>
            <v-action :loading="true" class="btn-blue">Blue</v-action>
            <v-action :loading="true" class="btn-yellow">Gold</v-action>
            <v-action :loading="true" class="btn-red">Red</v-action>
            <v-action :loading="true" class="btn-gray">Gray</v-action>
            <v-action :loading="true" >Default</v-action>
            <hr>
            <h3 class="mb-1">Sizes</h3>
            <v-action class="btn-red btn-xs">XS</v-action>
            <v-action class="btn-red btn-sm">SM</v-action>
            <v-action class="btn-red">Normal</v-action>
            <v-action class="btn-red btn-lg">LG</v-action>
            <v-action class="btn-red btn-xl">XL</v-action>
            <h3 class="mb-1">Block</h3>
            <v-action class="btn-block btn-green btn-xs mb-2">XS</v-action>
            <v-action class="btn-block btn-purple btn-sm mb-2">SM</v-action>
            <v-action class="btn-block btn-indigo mb-2">Normal</v-action>
            <v-action class="btn-block btn-blue btn-lg mb-2">LG</v-action>
            <v-action class="btn-block btn-yellow btn-xl mb-2">XL</v-action>
        </div>

    </div>
</template>
