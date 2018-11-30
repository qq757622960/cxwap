<template>
    <div class="m-report">
        <v-header htitle="体重变化曲线"></v-header>
        <scroll class="wrapper">
            <div class="echart-cont">
                <!-- <button @click="_getData">GET</button> -->
                <div class="echart-title">
                    <img src="./icon.jpg" alt="">
                    <h2>体重曲线</h2>
                    <span>/kg</span>
                </div>
                <ve-line
                    :data="chartData"
                    :extend="chartExtend"
                    :settings="chartSettings"
                    :data-empty="dataEmpty"
                    :legend-visible="false"
                    :tooltip-visible="false"
                    :loading="loading">
                </ve-line>
            </div>
        </scroll>
    </div>
</template>


<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'

    const DATA_FROM_BACKEND = {
        columns: ['date', 'W'],
        rows: [
            { 'date': '6/12\n2018', 'W': 44.9},
            { 'date': '6/14\n2018', 'W': 72.5},
            { 'date': '6/15\n2018', 'W': 88.9},
            { 'date': '6/17\n2018', 'W': 99.2},
            { 'date': '6/19\n2018', 'W': 56.6},
            { 'date': '6/20\n2018', 'W': 55},
            { 'date': '6/22\n2018', 'W': 66},
            { 'date': '6/24\n2018', 'W': 44},
            { 'date': '6/26\n2018', 'W': 46},
            { 'date': '6/28\n2018', 'W': 50},
            { 'date': '6/30\n2018', 'W': 52},
            { 'date': '7/2\n2018', 'W': 58},
            { 'date': '7/4\n2018', 'W': 60}
        ]
    }
    const START = (7 / DATA_FROM_BACKEND.rows.length * 100) | 0    // 起始位置
    const END = 100  // 结束位置
    const EMPTY_DATA = {
        columns: [],
        rows: []
    }
    const RED_LIGHT = '#fe7596'
    const RED_DARK = '#fedce5'

    export default {
        data () {
            let me = this
            this.chartSettings = {
                yAxisType: ['0.0'],
                area: true
            }
            this.chartExtend = {
                dataZoom: [{
                    type: 'inside',
                    start: START,
                    end: END
                }],
                title: {
                    text: '向右滑动查看更多→',
                    bottom: '10',
                    left: 'center',
                    textStyle: {
                        color: '#dddddd',
                        fontSize: '14px',
                        align: 'center'
                    }
                },
                xAxis: {
                    axisLabel: {
                        interval: 0,
                        formatter(value) {
                            return value
                        }
                    }
                },
                series: {
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 6,        // 设置指标大小
                    areaStyle: {           // 设置区域颜色
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0, color: RED_DARK // 0% 处的颜色
                                }, 
                                {
                                    offset: 1, color: RED_LIGHT // 100% 处的颜色
                                }
                            ],
                            globalCoord: false              // 缺省为 false
                        }
                    },
                    lineStyle: {            // 设置线的颜色
                        width: 1,
                        color: RED_LIGHT
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: RED_LIGHT,
                            color: RED_LIGHT
                        }
                    },
                    label: {
                        show: true,
                        color: RED_LIGHT
                    }
                }
            }
            return {
                chartData: {
                    columns: [],
                    rows: []
                },
                loading: false,
                dataEmpty: false
            }
        },
        created() {
            this._getData()
        },
        methods: {
            _getData() {
                this.loading = true
                setTimeout(() => {
                    this.chartData = 
                        this.chartData.rows.length
                            ? EMPTY_DATA
                            : DATA_FROM_BACKEND

                    this.dataEmpty = !this.chartData.rows.length
                    this.loading = false
                }, 500);
            }
        },
        components: {
            VHeader,
            Scroll
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-report
        position: fixed
        width 100%
        top: 50px
        bottom: 0
        .wrapper
            height 100%
            overflow hidden
    .echart-cont
        width 100%
        margin-top 10px
        padding: 10px
        background-color #fff
        .echart-title
            position relative
            top 25px
            left 10px
            img
                width 16px
                height 16px
                vertical-align baseline
            h2
                display inline-block
                font-size 16px
                font-weight 700
                color #000
            span
                font-size 12px
                color #6f6f6f
        .echarts
            width 100%
            height 100%
    .echart-date
        position relative
        top -84px
        font-size 14px
        left 30px
        color red
</style>