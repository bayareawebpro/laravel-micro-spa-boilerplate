<script>
    /**
     * Frappe Charts
     * @docs https://frappe.io/charts/docs
     */
    export default {
        name: "Chart",
        props: {
            value: {type: Object, default: () => ({})},
            config: {type: Object, default: () => ({})},
        },
        watch: {
            value: {
                deep:true,
                handler(newVal) {
                    this.chart.update(newVal)
                }
            }
        },
        mounted() {
            this.$nextTick(()=>{
                import(/*webpackChunkName:"frappe-charts"*/"frappe-charts/dist/frappe-charts.min.esm").then(({Chart})=>{
                    this.chart = new Chart(this.$refs.chart, {
                        ...this.config,
                        data: this.value,
                    })
                })
            })
        },
        beforeDestroy() {
            if(this.chart){
                this.chart.destroy()
            }
        }
    }
</script>
<template>
    <div ref="chart"></div>
</template>
