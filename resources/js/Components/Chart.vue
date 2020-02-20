<script>
    import {Chart} from "frappe-charts/dist/frappe-charts.min.esm"
    export default {
        name: "Chart",
        props: {
            value: {type: Object, default: () => ({})},
            config: {type: Object, default: () => ({})},
        },
        watch: {
            value: {
                handler(newVal) {
                    this.chart.update(newVal)
                }
            }
        },
        mounted() {
            /**
             * Frappe Charts
             * @docs https://frappe.io/charts/docs
             */
            // 'axis-mixed', bar, line, scatter, pie, percentage
            this.$options.chart = new Chart(this.$refs.chart, {
                title: "Chart",
                type: 'axis-mixed',
                data: this.value,
                ...this.config,
            })
        },
        beforeDestroy() {
            this.$options.chart.destroy()
        }
    }
</script>
<template>
    <div>
        <div ref="chart"></div>
    </div>
</template>
