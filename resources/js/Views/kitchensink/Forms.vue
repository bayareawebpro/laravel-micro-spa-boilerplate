<script>
    export default {
        name: "Forms",
        data: ()=>({
            form:
                { "switch": false, "number": "8", "email": "you@somewhere.com", "text": "John Laravel", "invalid": "This is invalid.", "select_many": [ 1, 2, 3 ], "select": 2, "textarea": "asdadsa" }
        }),
        // beforeCreate() {
        //     this.$bind.mapGetters('AbstractController', {
        //         form: 'form',
        //     })
        // },
    }
</script>
<template>
    <div class="layout relative px-6">
        <h1>Forms</h1>
        {{ form }}
        <form>
            <h4 class="my-2">Messages</h4>
            <v-form-message value="Default..."/>
            <v-form-message value="Warning..." type="warn"/>
            <v-form-message value="Info..." type="info"/>
            <v-form-message value="Error..." type="error"/>
            <hr>
            <h4 class="my-2">States</h4>
            <div class="grid">
                <div class="grid-item w-full md:w-1/2">
                    <v-input
                        icon="fa-warning"
                        label="Invalid"
                        help="I am invalid."
                        value="This is text."
                        :invalid="true"
                        v-model="form.invalid"
                    />
                </div>
                <div class="grid-item w-full md:w-1/2">
                    <v-input
                        icon="fa-edit"
                        type="text"
                        label="Disabled"
                        help="I am disabled."
                        value="This is text."
                        :disabled="true"
                    />
                </div>
            </div>

            <hr>
            <h4 class="my-2">Types</h4>
            <div class="grid items-start">
                <div class="grid-item w-full md:w-1/3">
                    <v-input
                        icon="fa-edit"
                        type="text"
                        label="Text"
                        v-model="form.text"
                        help="Enter some text."
                    />
                </div>
                <div class="grid-item w-full md:w-1/3">
                    <v-input
                        icon="fa-send"
                        type="email"
                        label="Email"
                        help="Enter your email."
                        v-model="form.email"
                        :required="true"
                    />
                </div>
                <div class="grid-item w-full md:w-1/3">
                    <v-input-number
                        icon="fa-calculator"
                        label="Number"
                        help="Enter the amount."
                        v-model="form.number"
                        :options="{min: 0, max:10, step:2}"
                    />
                </div>
                <div class="grid-item w-full md:w-1/2 py-4">
                    <v-input-switch
                        label="Switch"
                        help="Toggle state."
                        v-model="form.switch"
                    >This is a switch.</v-input-switch>
                </div>
                <div class="grid-item w-full md:w-1/2 py-4">
                    <v-input-switch
                        :disabled="true"
                        label="Switch Disabled"
                        help="Toggle state."
                        v-model="form.switch"
                    >This is a switch.</v-input-switch>
                </div>
                <div class="grid-item w-full md:w-1/2">
                    <v-input-select
                        label="Select"
                        icon="fa-edit"
                        help="Select state."
                        v-model="form.select"
                        :options="[
                            {value: null, label: 'All'},
                            {value: 1, label: 'Option1'},
                            {value: 2, label: 'Option2'},
                            {value: 3, label: 'Option3'},
                        ]"
                    />
                </div>
                <div class="grid-item w-full md:w-1/2">
                    <v-input-select
                        icon="fa-edit"
                        label="Select Many"
                        help="Select state."
                        v-model="form.select_many"
                        :multiple="true"
                        :options="[
                            {value: null, label: 'All'},
                            {value: 1, label: 'Option1'},
                            {value: 2, label: 'Option2'},
                            {value: 3, label: 'Option3'},
                        ]"
                    />
                </div>
            </div>

            <v-input-textarea
                label="Textarea"
                help="Enter multiple lines."
                value="This is text."
                v-model="form.textarea"
            />

            <v-input-file
                label="File"
                v-model="form.file"
                help="Choose a file."
                placeholder="Select"
                :options="{accept: ['image/*']}"
            />
        </form>
    </div>
</template>
