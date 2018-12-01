<template>
    <chart htitle="折线图表">
        <ve-line
            :data="chartData"
            :settings="chartSettings">
        </ve-line>
    </chart>
</template>

<script type="text/ecmascript-6">
    import Chart from 'base/chart/chart'

    export default {
        data() {
            this.chartSettings = {
                area: true,
                xAxisType: 'category',
                legendName: {
                    '女生': '总数量为女生'
                }
            }

            return {
                chartData: {
                    columns: ['日期', '女生'],
                    rows: [
                        { '日期': '5', '女生': 25 },
                        { '日期': '7', '女生': 23 },
                        { '日期': '9', '女生': 28 },
                        { '日期': '12', '女生': 29 },
                        { '日期': '14', '女生': 26 }
                    ]
                }
            }
        },
        methods: {},
        components: {
            Chart
        },
        created() {},
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    
</style>