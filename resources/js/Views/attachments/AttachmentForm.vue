<script>
    /** @property $errors */
    /** @property entity */
    /** @method update */
    /** @method store */
    export default {
        name: "AttachmentForm",
        beforeCreate() {
            this.$bind.mapGetters('Attachments', {
                entity: 'entity',
            })
            this.$bind.mapActions('Attachments', {
                isLoading: 'isLoading',
                update: 'update',
                store: 'store',
            })
            this.$bind.mapState('Attachments', {
                $errors: '$errors',
            })
        },
        created() {
            this.$errors.clear()
        },
        beforeDestroy() {
            this.$errors.clear()
        },
    }
</script>
<template>
    <div class="layout layout-centered w-full lg:max-w-4xl mx-auto p-4" v-if="entity">
        <div class="card">
            <div class="card-header">
                {{ entity.name || 'New Attachments' }}
            </div>
            <form ref="form" @submit.prevent>
                <div class="card-content">
                    <v-input-file
                        label="Image"
                        :value="entity"
                        help="Choose an image."
                        placeholder="Select"
                        @change="$errors.forget('file')"
                        :invalid="$errors.has('file')"
                        :options="{accept: ['image/*']}"
                    />
                </div>
            </form>
        </div>
    </div>
</template>
