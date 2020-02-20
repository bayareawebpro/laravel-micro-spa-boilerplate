<script>
    export default {
        name: "Forms",
        data: ()=>({form: {}}),
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
                    <v-form-control
                        type="text"
                        label="Invalid"
                        help="I am invalid."
                        :invalid="true"
                    />
                </div>
                <div class="grid-item w-full md:w-1/2">
                    <v-form-control
                        type="text"
                        label="Disabled"
                        help="I am disabled."
                        :disabled="true"
                    />
                </div>
            </div>

            <hr>
            <h4 class="my-2">Types</h4>
            <div class="grid items-start">
                <div class="grid-item w-full md:w-1/3">
                    <v-form-control
                        type="text"
                        label="Text"
                        help="Enter some text."
                        value="This is text."
                        v-model="form.text"
                    />
                </div>
                <div class="grid-item w-full md:w-1/3">
                    <v-form-control
                        type="email"
                        label="Email"
                        help="Enter your email."
                        value="you@somewhere.net"
                        v-model="form.email"
                        :required="true"
                    />
                </div>
                <div class="grid-item w-full md:w-1/3">
                    <v-form-control
                        type="number"
                        label="Number"
                        help="Enter the amount."
                        v-model="form.number"
                        :options="{min: 0, max:10, step:2}"
                    />
                </div>
                <div class="grid-item w-full md:w-1/2">
                    <v-form-control
                        type="select"
                        label="Select"
                        :value="1"
                        help="Select state."
                        v-model="form.select"
                        :options="[
                            {value: '1', label: 'Option1'},
                            {value: '2', label: 'Option2'},
                            {value: '3', label: 'Option3'},
                        ]"
                    />
                </div>
                <div class="grid-item w-full md:w-1/2">
                    <v-form-control
                        type="switch"
                        label="Switch"
                        help="Toggle state."
                        v-model="form.switch"
                    />
                </div>
                <div class="grid-item w-full md:w-1/2">
                    <v-form-control
                        type="textarea"
                        label="Textarea"
                        help="Enter multiple lines."
                        value="This is text."
                        v-model="form.textarea"
                    />
                </div>
            </div>
            <v-form-control
                type="file"
                label="File"
                v-model="form.file"
                help="Choose a file."
                placeholder="Select"
                :options="{accept: ['image/*']}"
            />
        </form>
    </div>
</template>
