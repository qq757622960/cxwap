<template>
    <div class="m-report">
        <v-header htitle="体重变化曲线" @back="back"></v-header>
        <scroll class="wrapper">
            <div class="echart-cont">
                <div class="echart-title">
                    <img src="./icon.jpg" alt="">
                    <h2>体重曲线</h2>
                    <span>/kg</span>
                </div>
                <ve-line
                    :data="chartData"
                    :extend="chartExtend"
                    :settings="chartSettings"
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
    import Report from 'common/js/report'
    import { getReportList } from 'api/report'
    import { closeWebView } from 'common/js/bridge'
    import { mapGetters } from 'vuex'

    const START = 70 // 起始位置
    const END = 100  // 结束位置
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
            this._getReportList()
        },
        methods: {
            back(e) {
                closeWebView()
            },
            _getReportList() {
                this.loading = true
                getReportList().then((res) => {
                    this.chartData = this._normalizeList(res.data.data.list)
                    this.dataEmpty = !this.chartData.rows.length
                    this.loading = false
                })
            },
            _normalizeList(list) {
                let chartData = {
                    columns: ['ctime', 'weight'],
                    rows: []
                }
                list.forEach(item => {
                    chartData.rows.push(new Report({
                        ctime: item['ctime'],
                        weight: item['weight']
                    }))
                })
                return chartData
            }
        },
        computed: {
            ...mapGetters(['userinfo'])
        },
        components: {
            VHeader,
            Scroll
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slider
        width 100px
        height 100px
        background-color red
        transition all .3s
        transform translate3d(50%, 0, 0)

    .m-report
        position: fixed
        width 100%
        top: 50px
        bottom: 0
        max-width: 540px
        min-width: 320px
        margin: 0 auto
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