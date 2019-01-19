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
                    :loading="loading"
                    :data-empty="dataEmpty">
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
    import { mapGetters } from 'vuex'
    import { mixin } from 'mixin/index'
    import {trigger, TYPES} from 'common/js/bridge'
    import VCharts from 'v-charts'
    import VeLine from 'v-charts/lib/line.common'

    const RED_LIGHT = '#fe7596'
    const RED_DARK = '#fedce5'

    // const DATA_FROM_BACKEND = {
    //     columns: ['date', 'PV'],
    //     rows: [
    //         { 'date': '2018-05-22', 'PV': 32371 },
    //         { 'date': '2018-05-23', 'PV': 12328 },
    //         { 'date': '2018-05-24', 'PV': 92381 },
    //         { 'date': '2018-05-25', 'PV': 92381 },
    //         { 'date': '2018-05-26', 'PV': 92381 },
    //         { 'date': '2018-05-27', 'PV': 92381 },
    //         { 'date': '2018-05-28', 'PV': 92381 },
    //         { 'date': '2018-05-29', 'PV': 92381 }
    //     ]
    // }
    // const EMPTY_DATA = {
    //     columns: [],
    //     rows: []
    // }
    // export default {
    //     data () {
    //         this.chartExtend = {
    //             dataZoom: [{
    //                 type: 'inside',
    //                 start: 50,
    //                 end: 100
    //             }]
    //         }
    //         this.chartSettings = {
    //             yAxisType: ['0,0a']
    //         }
    //         return {
    //             chartData: {
    //                 columns: [],
    //                 rows: []
    //             },
    //             loading: false,
    //             dataEmpty: false
    //         }
    //     },
    //     methods: {
    //         back() {},
    //         getData () {
    //             this.loading = true
    //             // ajax get data ....
    //             setTimeout(() => {
    //                 this.chartData = DATA_FROM_BACKEND
    //                 this.dataEmpty = !this.chartData.rows.length
    //                 this.loading = false
    //                 // this._setCharts()
    //             }, 1000)
    //         }
    //     },
    //     created () {
    //         this.getData()
    //     },
    //     components: {
    //         VHeader,
    //         Scroll
    //     }
    // }

    export default {
        
        data () {
            this.chartSettings = {}
            this.chartExtend = {}
            return {
                chartData: {
                    columns: [],
                    rows: []
                },
                loading: false,
                dataEmpty: false
            }
        },
        mixins: [mixin],
        created() {
            this._getReportList()
        },
        methods: {
            async _getReportList() {
                let userinfo = await trigger(TYPES.GET_USERINFO)
                // let userinfo = { token: '0E9D46E144AE8A688334E906A4D03BDF526019B83AD7952C8ACC1DDF89E250EF', user_id: '43' }
                // let userinfo = { token: '5CF3FBF4DCF00D6A85916CEC4D2A69FCA465658D6E3B3EBF4C999DF3862E03B9', user_id: '36' }
                console.log(userinfo)
                this.loading = true 
                getReportList(userinfo).then((res) => {
                    this.chartData = this._normalizeList(res.data.data.list)
                    this.dataEmpty = !this.chartData.rows.length
                    this._computedPosition(this.chartData.rows.length)
                    this._setCharts()
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
            },
            _computedPosition(length) {
                this.end = 100
                length <= 7 
                    ? (this.start = 0) 
                    : (this.start = (100 - Math.floor(7 / length * 100)))
                console.log(this.start)
            },
            _setCharts() {
                let me = this
                this.chartSettings = {
                    yAxisType: ['0.0'],
                    area: true
                }
                this.chartExtend = {
                    dataZoom: [{
                        type: 'inside',
                        start: this.start,
                        end: 100
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
            }
        },
        computed: {
            ...mapGetters(['userinfo'])
        },
        components: {
            VHeader,
            Scroll,
            VeLine
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
        top: 44px
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
                font-weight 200
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