<template>
    <div class="m-health">
        <a class="back" @click="back">
            <i class="iconfont icon-fanhuijiantouxiangqingye"></i>
        </a>
        <div class="bg-image" :style="bgStyle" ref="bgImage">
            <div class="filter" ref="filter"></div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <scroll class="wrapper" 
            ref="scroll" 
            @scroll="scroll"
            :listen-scroll="listenScroll" 
            :probe-type="probeType"
            :data="data">
            <div>
                <div class="cont" v-if="data">
                    <div class="m-sec-1">
                        <div class="title">
                            <h2>尊敬的{{ data.username }}<span v-show="data.gender == '男'">先生</span><span v-show="data.gender == '女'">女士</span></h2>
                            <h3>欢迎您体验我司私人定制减重服务</h3>
                        </div>
                        <p>在这里您将得到细致入微的照顾及科学严谨的体重管理执行计划，并在目标周期内进行健康减脂。</p>
                        <p>我们确保只为您推荐品质极高的营养食品，并为您提供专业的计划与服务，并以最为经济、健康的方式帮你达成目标。</p>
                        <p>为此，希望您能与我们保持紧密配合，进行必要的沟通与协调，预祝您减脂成功，生活幸福。</p>
                        <p>此致，敬上。</p>
                    </div>
                    <div class="m-sec-2">
                        <h2 class="title">你的基础资料| DATA</h2>
                        <p>我们承诺将妥协保管您的隐私资料，并保障私人定制服务的持续跟进</p>
                        <table>
                            <tr>
                                <td>姓名</td>
                                <td>{{ data.username }}</td>
                            </tr>
                            <tr>
                                <td>性别</td>
                                <td>{{ data.gender || '男' }}</td>
                            </tr>
                            <tr>
                                <td>体重</td>
                                <td>{{ data.weight || 0}}kg</td>
                            </tr>
                            <tr>
                                <td>年龄</td>
                                <td>{{ data.age || 0}}</td>
                            </tr>
                            <tr>
                                <td>身高</td>
                                <td>{{ data.stature || 0.0}}cm</td>
                            </tr>
                            <tr>
                                <td>BMI值</td>
                                <td>{{ data.bmi }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="m-sec-2">
                        <h2 class="title">肥胖成因分析| ANALYSIS</h2>
                        <p>首先让我们一起来分析您肥胖成因，从根本上解决问题为你省去烦恼。根据调研收集的资料，我们初步判断，以下几个原因是引起您肥胖的关键。</p>
                    </div>
                    <div class="m-sec-2">
                        <h2 class="title">定制方案(上)| PLAN</h2>
                        <p>以上就是您的肥胖成因报告，在经过资料收集和分析之后，我们将为您提供以下服务。</p>
                    </div>
                    <div class="m-sec-3">
                        <h2 class="title">产品服务I</h2>
                        <p>首先让我们一起来分析您肥胖成因，从根本上解决问题为你省去烦恼。根据调研收集的资料，我们初步判断，以下几个原因是引起您肥胖的关键。</p>
                    </div>
                    <div class="m-sec-3">
                        <h2 class="title">运动服务II</h2>
                        <p>通过消耗内脏脂肪和提1高基础代谢量，从而提高身体的肌肉活力，并促进身体对蛋白质的需求和吸收能力，使身体能够充分利用日常饮食中的营养物质，避免脂肪堆积。</p>
                    </div>
                    <div class="m-sec-3">
                        <h2 class="title">饮食服务III</h2>
                        <p>我们会根据口味和实际条件，制定符合您减重需要且容易执行的燃脂饮食方案，通过吃就可以减肥，提高基础代谢调节，主导脂肪燃烧。</p>
                    </div>
                    <div class="m-sec-2">
                        <h2 class="title">膳食方案| Dietary PL .AN</h2>
                        <p>服务期间，您的每日燃脂食谱将由营养师量身定制此外，我们整理了一张常见食物Gi值表。绿色食物可在营养师推荐下合理摄入，红色食物减肥期间需严格戒除，体重管理服务结束后仍不推荐摄入。</p>
                        <ul class="btn-group">
                            <li>蛋白质</li>
                            <li>麦片</li>
                            <li>烧烤、外卖</li>
                            <li>拷贝</li>
                            <li>查询</li>
                            <li>瘦肉</li>
                            <li>土豆</li>
                            <li>面条、面包</li>
                            <li>蔬菜</li>
                            <li>哈密瓜</li>
                            <li>炼乳、果酱</li>
                            <li>玉米</li>
                            <li>芒果</li>
                            <li>西瓜</li>
                            <li>鱼虾</li>
                            <li>全脂奶</li>
                            <li>酒、糖饮料</li>
                            <li>芋头</li>
                        </ul>
                    </div>
                    <div class="m-sec-2">
                        <h2 class="title">服务须知| Dietary PL .AN</h2>
                        <p>为了确保您的减脂效果，在减脂周期内请配合我们做到以下几点。</p>
                        <ol>
                            <li>
                                <span>1.接收顾问指导及建议</span>
                                <p>服务期间请按照指导摄入产品确保燃脂效果，请勿随意使用产品。</p>
                            </li>
                            <li>
                                <span>2.按时上传饮食照片</span>
                                <p>以便我们评估您的热量摄入情况，并回复给您准确的膳食建议。</p>
                            </li>
                            <li>
                                <span>3.请勿隐瞒实际情况</span>
                                <p>为了您的体重管理，请勿隐瞒实际摄入食物量，以免评估有误。</p>
                            </li>
                            <li>
                                <span>4.相信我们的专业程度</span>
                                <p>服务期间请勿使用其他产品，相信您此次选择是最明确的。</p>
                            </li>
                        </ol>
                    </div>
                    <div class="m-sec-4">
                        <h2>最后</h2>
                        <p>请与我们一起见证改变!</p>
                        <h3>THANKS</h3>
                        <p>再次感谢您对我们的信任</p>
                    </div>
                </div>
            </div>
            <div class="loading-container" v-show="loading">
                <loading></loading>
            </div>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'
    import {trigger, TYPES} from 'common/js/bridge'
    import { getHealthReportDetail } from 'api/healthReport'

    const RESERVED_HEIGHT = 50

    export default {
        data() {
            return {
                title: this.$route.params.title,
                data: null,
                scrollY: 0,
                loading: false
            }
        },
        methods: {
            back() {
                this.$router.back()
            },
            scroll(pos) {
                this.scrollY = pos.y
            },
            async _getHealthReportDetail(id) {
                this.loading = true
                let userinfo = await trigger(TYPES.GET_USERINFO)
                // let userinfo = { token: '9AF4BF2C84FE33EF0E21964924C1F39232373B4C274707391758AD0231E40CA5', user_id: '35' }
                console.log(userinfo)
                getHealthReportDetail(userinfo, {report_id: id}).then((res) => {
                    console.log(res);
                    if (res.data.ret == 200) {
                        this.data = res.data.data
                        this.loading = false
                    }
                })
            }
        },
        watch: {
            scrollY(newY) {
                let zIndex = 0
                let scale = 1
                let translateY = Math.max(this.minTransalteY, newY)
                let blur = 0
                const percent = Math.abs(newY / this.imageHeight)

                if (newY > 0) {
                    scale = 1 + percent
                    zIndex = 10
                } else {
                    blur = Math.min(20, percent * 20)
                }
                this.$refs.filter.style['backdrop-filter'] = `blur(${blur}px)`
                this.$refs.filter.style['webkitBackdrop-filter'] = `blur(${blur}px)`
                this.$refs.layer.style['transform'] = `translate3d(0, ${translateY}px, 0)`
                this.$refs.layer.style['webkitTransform'] = `translate3d(0, ${translateY}px, 0)`

                if (newY < this.minTransalteY) {
                    zIndex = 10
                    this.$refs.bgImage.style.paddingTop = 0
                    this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
                } else {
                    this.$refs.bgImage.style.paddingTop = `60%`
                    this.$refs.bgImage.style.height = `0px`
                }

                this.$refs.bgImage.style['transform'] = `scale(${scale})`
                this.$refs.bgImage.style['webkitTransform'] = `scale(${scale})`
                this.$refs.bgImage.style.zIndex = zIndex
            }
        },
        computed: {
            bgStyle() {
                return `background-image: url(${require('./header.jpeg')})`
            }
        },
        components: {
            VHeader,
            Scroll,
            Loading
        },
        created() {
            this.probeType = 3
            this.listenScroll = true
            this._getHealthReportDetail(this.$route.params.id)
        },
        mounted() {
            this.imageHeight = this.$refs.bgImage.clientHeight
            this.minTransalteY = -this.imageHeight + RESERVED_HEIGHT
            this.$refs.scroll.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    // 38 62
    .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
    .back
        position fixed
        top 0
        left 0
        z-index 11
        padding 10px
        i 
            font-size 24px
            color #fff
    .m-health
        width 100%
        position: fixed
        z-index: 100
        top: 0
        left: 0
        bottom: 0
        right: 0
        max-width 540px
        min-width 320px
        margin 0 auto
        background-color #fff
        .wrapper
            position: absolute
            top: 0
            bottom: 0
            width 100%
            // height 100%
            // overflow hidden
        .bg-image
            position: relative
            width: 100%
            height: 0
            padding-top: 60%
            transform-origin: top
            background-size: cover
            .filter
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                // background: rgba(7, 17, 27, 0.4)
        .bg-layer
            position: relative
            height: 100%
            background: #fff
            // background: red
        .cont
            padding 25px 20px
            p
                padding-bottom 20px
                font-size $font-size-medium
                text-align left
            .m-sec-1
                font-size $font-size-large
                color #000
                text-align center
                h2
                    font-weight 700
                    padding-bottom 8px
                h3
                    font-size $font-size-medium-x
                    font-weight 700
                .title
                    margin-bottom 20px
                    padding-bottom 20px
                    border-bottom 1px solid #ddd
            .m-sec-2
                .title
                    position relative
                    padding 3px 0 3px 15px
                    margin-bottom 20px
                    background-color $color-sub-theme
                    font-size $font-size-medium-x
                    &:before
                        content ''
                        position absolute
                        left 0
                        top 0
                        bottom 0
                        width 10px                        
                        background-color $color-theme
                ol
                    li
                        padding-top 20px
                        border-bottom 1px solid #ddd
                        &:first-child
                            padding-top 0
                table
                    width 100%
                    text-align center
                    margin-bottom 20px
                    border-spacing 1px
                    border-collapse separate
                    td
                        color #fff
                        padding: 5px 0
                        &:first-child
                            width 38%
                            background-color $color-theme
                        &:last-child
                            width 38%
                            background-color $color-theme-d
                .btn-group
                    display flex
                    flex-wrap wrap
                    justify-content space-between
                    margin-bottom 15px
                    li
                        width 30%;
                        padding 5px 5px
                        margin-bottom 10px
                        border-radius 4px
                        text-align center
                        color #fff
                        background-color #259b23
                        &:nth-child(3n+0)
                            background-color $color-theme
                        &:nth-child(3n+2)
                            background-color #ff9801
            .m-sec-3
                .title
                    margin-bottom 20px
            .m-sec-4
                padding 60px 0 0px 0
                h2
                    font-size $font-size-large-x
                    padding-bottom 10px
                p
                    &:first-child
                        padding-bottom 65px !important
</style>