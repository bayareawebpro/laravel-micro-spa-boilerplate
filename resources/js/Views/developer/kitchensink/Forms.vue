<script>
    export default {
        name: "Forms",
        data: () => ({
            form: {
                file1: null,
                file2: {"name": "Fake.zip", "mime": "application/zip", "size": 33729},
                switch: false,
                radio: 1,
                number: "8",
                email: "you@somewhere.com",
                text: "John Laravel",
                invalid: "This is invalid.",
                textarea: "asdadsa",
                select_many: [1, 2],
                select: 2,
            }
        }),
    }
</script>
<template>
    <div class="p-6">
        <h1>Forms</h1>



        <h4 class="my-2">Messages</h4>
        <div class="grid">
            <div class="grid-item w-full md:w-1/2">
                <v-form-message value="Default..."/>
            </div>
            <div class="grid-item w-full md:w-1/2">
                <v-form-message value="Warning..." type="warn"/>
            </div>
            <div class="grid-item w-full md:w-1/2">
                <v-form-message value="Info..." type="info"/>
            </div>
            <div class="grid-item w-full md:w-1/2">
                <v-form-message value="Error..." type="error"/>
            </div>
        </div>
        <form>
            <h4 class="my-2">States</h4>
            <div class="grid">
                <div class="grid-item w-full md:w-1/2">
                    <v-input
                        icon="fa-exclamation-triangle"
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
                <div class="grid-item w-full md:w-1/4">
                    <v-input
                        icon="fa-search"
                        label="Search"
                        type="search"
                        help="Search for something."
                        value="This is text."
                        v-model="form.search"
                    />
                </div>
                <div class="grid-item w-full md:w-1/4">
                    <v-input
                        icon="fa-edit"
                        type="text"
                        label="Text"
                        v-model="form.text"
                        help="Enter some text."
                    />
                </div>
                <div class="grid-item w-full md:w-1/4">
                    <v-input
                        icon="fa-paper-plane"
                        type="email"
                        label="Email"
                        help="Enter your email."
                        v-model="form.email"
                        :required="true"
                    />
                </div>
                <div class="grid-item w-full md:w-1/4">
                    <v-input-number
                        icon="fa-calculator"
                        label="Number"
                        help="Enter the amount."
                        v-model="form.number"
                        :options="{min: 0, max:10, step:2}"
                    />
                </div>
                <div class="grid-item w-full md:w-1/4 py-4">
                    <v-input-switch
                        label="Switch"
                        name="switch1"
                        help="Toggle state."
                        v-model="form.switch"
                    >This is a switch.
                    </v-input-switch>
                </div>
                <div class="grid-item w-full md:w-1/4 py-4">
                    <v-input-switch
                        :disabled="true"
                        name="switch2"
                        label="Switch Disabled"
                        help="Toggle state."
                    >This is a switch.
                    </v-input-switch>
                </div>

                <div class="grid-item w-full md:w-1/3">
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
                <div class="grid-item w-full md:w-1/3">
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

            <hr>
            <h1>Radio Options</h1>

            <div class="grid list-group">
                <div class="grid-item list-group-item w-full lg:w-1/4">
                    <v-input-radio
                        label="Admin"
                        icon="fa-user-plus"
                        name="radio"
                        help="The user is an Admin."
                        v-model="form.radio"
                        :options="{value: 1}"
                    />
                </div>
                <div class="grid-item list-group-item w-full lg:w-1/4">
                    <v-input-radio
                        label="Guest"
                        name="radio"
                        icon="fa-user"
                        help="The user is a Guest."
                        v-model="form.radio"
                        :options="{value: 2}"
                    />
                </div>
                <div class="grid-item list-group-item w-full lg:w-1/4">
                    <v-input-radio
                        label="Customer"
                        name="radio"
                        icon="fa-shopping-cart"
                        help="The user is a Customer."
                        v-model="form.radio"
                        :options="{value: 3}"
                    />
                </div>
            </div>


            <hr>
            <h1>Files</h1>
            <div class="grid">
                <div class="grid-item flex-shrink">
                    <v-input-file
                        label="Image"
                        icon="fa-image"
                        v-model="form.file1"
                        help="Choose an image."
                        placeholder="Select"
                        :options="{accept: ['image/*']}"
                        class="inline-block"
                    />
                </div>
                <div class="grid-item flex-grow">
                    <div class="list-group">
                        <div class="list-group-item">
                            <v-input-file
                                label="Archive"
                                v-model="form.file2"
                                help="Choose an archive."
                                placeholder="Select"
                                :options="{accept: ['application/zip']}"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        </form>
    </div>
</template>
