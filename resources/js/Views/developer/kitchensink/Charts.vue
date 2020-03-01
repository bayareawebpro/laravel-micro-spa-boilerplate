<script>
    export default {
        name: "Charts",
        data() {
            return {
                chart: {
                    labels: [
                        "12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
                    ],
                    datasets: [
                        {
                            name: "Some Data", type: "bar",
                            values: this.randomize()
                        },
                        {
                            name: "Another Set", type: "line",
                            values: this.randomize()
                        }
                    ]
                },
                chart2: {
                    type: 'axis-mixed',
                    labels: [
                        "12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
                    ],
                    datasets: [
                        {
                            name: "Some Data", type: "bar",
                            values: this.randomize()
                        },
                        {
                            name: "Another Set", type: "line",
                            values: this.randomize()
                        }
                    ]
                },
                chart3: {
                    labels: [
                        "12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
                    ],
                    datasets: [
                        {
                            name: "Some Data", type: "bar",
                            values: this.randomize()
                        },
                        {
                            name: "Another Set", type: "line",
                            values: this.randomize()
                        }
                    ]
                },
            }
        },
        methods: {
            randomize() {
                return [
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100)
                ]
            },
            update(){
                this.chart.datasets[0].values = this.randomize()
                this.chart.datasets[1].values = this.randomize()
                this.chart2.datasets[0].values = this.randomize()
                this.chart2.datasets[1].values = this.randomize()
                this.chart3.datasets[0].values = this.randomize()
                this.chart3.datasets[1].values = this.randomize()
            }
        },
        created(){
            this.interval = setInterval(this.update, 2000)
        },
        beforeDestroy(){
            clearInterval(this.interval)
        }
    }
</script>
<template>
    <div>
        <div class="card my-4">
            <div class="card-header bg-gray-800">
                <i class="fa fa-chart-bar"></i> ChartA
            </div>
            <div class="card-content bg-gray-900">
                <v-chart v-model="chart" :config="{
                title: 'chartB',
                type: 'bar',
                height: 250,
                colors: ['#7cd6fd', '#743ee2']
                }"/>
            </div>
        </div>

        <div class="card my-4">
            <div class="card-header bg-gray-800">
                <i class="fa fa-chart-bar"></i> ChartB
            </div>
            <div class="card-content bg-gray-900">
                <v-chart v-model="chart2" :config="{
                title: 'chartB',
                type: 'axis-mixed',
                height: 250,
                colors: ['#7cd6fd', '#743ee2']
                }"/>
            </div>
        </div>

        <div class="card my-4">
            <div class="card-header bg-gray-800">
                <i class="fa fa-chart-bar"></i> ChartC
            </div>
            <div class="card-content bg-gray-900">
                <v-chart v-model="chart3"  :config="{
                title: 'chartC',
                type: 'pie',
                height: 350,
                colors: ['#7cd6fd', '#743ee2']
                }"/>
            </div>
        </div>
    </div>
</template>
