<script>
    export default {
        name: "Forms",
        data: ()=>({
            form:{  }
        })
    }
</script>
<template>
    <div class="layout relative px-6">
        <h1>Files</h1>
        <div class="grid">
            <div class="grid-item w-full md:w-1/2">
                <v-input-file
                    label="Image"
                    v-model="form.file"
                    help="Choose an image."
                    placeholder="Select"
                    :options="{accept: ['image/*']}"
                />
            </div>
            <div class="grid-item w-full md:w-1/2">
                <v-input-file
                    label="File (Archive)"
                    v-model="form.file"
                    help="Choose an Archive."
                    placeholder="Select Archive"
                    :options="{accept: ['application/zip']}"
                />
            </div>
        </div>
    </div>
</template>
