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
            :probe-type="probeType">
            <div>
                <p v-for="n in 100" :key="n">{{ n }}</p>
            </div>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'
    import {trigger, TYPES} from 'common/js/bridge'
    import { getHealthReportDetail } from 'api/healthReport'

    const RESERVED_HEIGHT = 50

    export default {
        data() {
            return {
                title: this.$route.params.title,
                data: null,
                scrollY: 0
            }
        },
        methods: {
            back() {
                this.$router.back()
            },
            scroll(pos) {
                this.scrollY = pos.y
            },
            _getHealthReportDetail(id) {
                // let userinfo = await trigger(TYPES.GET_USERINFO)
                let userinfo = { token: '9AF4BF2C84FE33EF0E21964924C1F39232373B4C274707391758AD0231E40CA5', user_id: '35' }
                // console.log(userinfo)
                getHealthReportDetail(userinfo, {temp_id: id}).then((res) => {
                    console.log(res);
                    if (res.data.ret == 200) {
                        this.data = res.data.data
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
                return `background-image: url(${require('./header.jpg')})`
            }
        },
        components: {
            VHeader,
            Scroll
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
</style>