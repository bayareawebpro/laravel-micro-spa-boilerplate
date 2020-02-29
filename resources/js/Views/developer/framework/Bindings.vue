<script>
    export default {
        name: 'Bindings',
        computed: {
            items() {
                const entries = []
                Object.keys(this.$app.bindings).forEach((alias) => {
                    const isResolved = this.$app.isResolved(alias)
                    const canShare = this.$app.canShare(alias)
                    const isConcrete = this.$app.isConcrete(alias)
                    const isClass = this.$app.isClass(alias)
                    const entry = {
                        alias: alias,
                        status: isResolved ? 'Resolved' : 'UnInstantiated',
                        type: isConcrete ? 'Concrete' : (isClass ? 'Class' : 'Callback'),
                        shared: canShare ? 'Shared' : 'Unique',
                        isConcrete,
                        isResolved,
                        canShare,
                        isClass,
                    }
                    entries.push(entry)
                })
                return entries
            },
        }
    }
</script>
<template>
    <div>
        <div class="card w-full text-sm">
            <div class="card-header">
                Bindings
            </div>
            <div class="card-content">
                <table class="text-left">
                    <thead>
                    <tr>
                        <th>Alias</th>
                        <th>State</th>
                        <th>Type</th>
                        <th>Instance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in items">
                        <td><i class="fa fa-cube text-blue-500"/> {{ item.alias }}</td>
                        <td>
                            <i v-if="item.isResolved" class="fa fa-microchip text-green-500"/>
                            <i v-else class="fa fa-user-clock text-orange-500"/>
                            {{ item.status }}
                        </td>
                        <td>
                            <i v-if="item.isConcrete" class="fa fa-microchip text-blue-500"/>
                            <i v-else-if="item.isClass" class="fa fa-clone text-red-500"/>
                            <i v-else class="fa fa-code text-orange-500"/>
                            {{ item.type }}
                        </td>
                        <td>
                            <template v-if="item.canShare">
                                <i class="fa fa-code-branch green-500"/> {{ item.shared }}
                            </template>
                            <template v-else>
                                <i class="fa fa-bullseye red-500"/> {{ item.shared }}
                            </template>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card w-full text-sm mt-4">
            <div class="card-header">
                Reserved Words
            </div>
            <div class="card-content">
                <v-console-output v-model="$app.reservedWords"/>
            </div>
        </div>
    </div>
</template>
