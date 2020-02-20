<script>
    export default {
        name: 'Providers',
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
            items() {
                const entries = []
                Object.keys(this.$app.providers).forEach((name) => {
                    const provider = this.$app.providers[name]
                    const entry = {
                        name: name,
                        provides: provider.provides.join(', '),
                        status: provider.isDeferred && !provider.isBooted ? 'Deferred' : 'Booted',
                        deferred: provider.isDeferred,
                        booted: provider.isBooted,
                    }
                    entries.push(entry)
                })
                return entries
            },
        }
    }
</script>
<template>
    <div class="layout p-4 text-white">
        <div class="card w-full text-sm mb-4">
            <div class="card-header flex">
                Service Providers
            </div>
            <div class="card-content px-2 text-xs">
                <table class="text-left">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Provides</th>
                        <th>State</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items">
                        <td><i class="fa fa-cube text-blue-500"/> {{ item.name }}</td>
                        <td>
                            <i class="fa fa-cubes text-blue-500"/> {{ item.provides }}
                        </td>
                        <td>
                            <i v-if="item.booted" class="fa fa-microchip text-green-500"/>
                            <i v-else class="fa fa-user-clock blue-text-grey-500"/>
                            {{ item.status }}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
