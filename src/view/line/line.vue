<template>
    <chart htitle="折线图表">
        <ve-line
            :data="chartData"
            :settings="chartSettings"
            @ready="ready"
            :before-config="beforeConfig">
        </ve-line>
    </chart>
</template>

<script type="text/ecmascript-6">
    import Chart from 'base/chart/chart'

    export default {
        data() {
            this.chartSettings = {
                area: true
            }

            return {
                chartData: {
                    columns: ['日期', '体重'],
                    rows: [
                        { '日期': '06/01', '体重': 50 },
                        { '日期': '06/02', '体重': 60 },
                        { '日期': '06/03', '体重': 70 },
                        { '日期': '06/04', '体重': 80 },
                        { '日期': '06/05', '体重': 90 },
                        { '日期': '06/06', '体重': 50 },
                        { '日期': '06/07', '体重': 60 },
                        { '日期': '06/08', '体重': 70 }
                    ]
                }
            }
        },
        methods: {
            ready() {
                console.log('ready');
            },
            beforeConfig() {
                console.log('beforeConfig');
            }
        },
        components: {
            Chart
        },
        created() {
            
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    
</style>