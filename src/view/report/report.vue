<template>
    <div>
        <h2>头部</h2>
        <div class="echart-cont">
            <v-chart :options="area"></v-chart>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/markArea'
    import { getReportList } from 'api/report'

    export default {
        data() {
            return {
                xData: [],
                sData: [],
                area: {
                    color: ['#01b882','#ffffff', '#fe4600', '#d48265', '#91c7ae','#749f83'],
                    backgroundColor: '#fff',   // 设置背景颜色
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '123', '456']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1233, 1800],
                        type: 'line',
                        areaStyle: {

                        }
                    }]
                }
            }
        },
        created() {
            this._getReportList()
        },
        methods: {
            _getReportList() {
                let data = getReportList()
                this.xData = data.xData
                this.sData = data.sData
            }
        },
        components: {
            'v-chart': ECharts
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .echart-cont
        width 100%
        height 400px
        padding: 20px
        .echarts
            width 100%
            height 100%
</style>