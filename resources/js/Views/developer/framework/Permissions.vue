<script>
    export default {
        name: 'Permissions',
        computed: {
            items() {
                return this.$app.make('Config').get('permissions')
            },
        }
    }
</script>
<template>
    <div>
        <div class="card w-full text-sm">
            <div class="card-header">
                Permissions
            </div>
            <div class="card-content">
                <table class="text-left">
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Grants</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,key) in items">
                        <td>
                            <i class="fa fa-cube text-blue-500"/>
                            {{ key }}
                        </td>
                        <td>
                            <div v-for="grant in item">
                                {{ grant }}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
