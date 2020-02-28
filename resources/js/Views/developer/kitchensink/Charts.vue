<script>
    export default {
        name: "Charts",
        data: ()=>({
            chart:{
                labels: [
                    "12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                    "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
                ],
                datasets: [
                    {
                        name: "Some Data", type: "bar",
                        values: [25, 40, 30, 35, 8, 52, 17, -4]
                    },
                    {
                        name: "Another Set", type: "line",
                        values: [25, 50, -10, 15, 18, 32, 27, 14]
                    }
                ]
            },
            config: {
                title: "My Awesome Chart",
                type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
                height: 350,
                colors: ['#7cd6fd', '#743ee2']
            },
        }),
    }
</script>
<template>
    <div class="layout p-4">
        <h1 class="page-title">Charts</h1>
        <p class="page-lead">Frappe SVG Charts</p>
        <div class="card">
            <div class="card-header bg-gray-800">
                <i class="fa fa-chart-bar"></i> Chart
            </div>
            <div class="card-content bg-gray-900">
                <v-chart v-model="chart" :config="config"/>
            </div>
        </div>
    </div>
</template>
