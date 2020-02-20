<script>
    export default {
        name: 'Sharing',
        data: () => ({
            pagination: {
                descending: false,
                page: 1,
                rowsPerPage: 25,
                sortBy: 'order',
                totalItems: 0
            }
        }),
        computed: {
            sharing() {
                return {
                    sharedWith: this.$app.sharedWith,
                    sharable: this.$app.sharable
                }
            },
            items: {
                cache: false,
                get() {
                    return this.$app.sharable
                }
            }
        },
        methods: {
            getRealName(obj) {
                const name = this.$app.getName(obj)
                if (name === 'Window') {
                    return name.toLowerCase()
                }
                return name
            },
            share(alias) {
                this.$app.share(alias).withOthers(window)
                this.$forceUpdate()
            },
            unShare(alias) {
                this.$app.unShare(alias)
                this.$forceUpdate()
            }
        },
    }
</script>
<template>
    <div class="layout p-4 text-white">
        <div class="card w-full">
            <div class="card-header">
                Sharing
            </div>
            <div class="card-content px-2 text-xs">
                <table class="text-left">
                    <thead>
                    <tr>
                        <th>Alias</th>
                        <th>Shared</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items">
                        <td><i class="fa fa-cube text-blue-500"/> {{ item }}</td>
                        <td>
                            <template v-if="!$app.sharedWith[item]">
                                -
                            </template>
                            <template v-else v-for="obj in $app.sharedWith[item]">
                                <code class="text-xs">{{ getRealName(obj) }}.{{ $app.getSharedAliasName(item) }}()</code><br>
                            </template>
                        </td>
                        <td>
                            <v-action v-if="$app.isShared(item)" @click="unShare(item)" class="btn-xs">Revoke</v-action>
                            <v-action v-else @click="share(item)" class="btn-xs" >Share</v-action>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
