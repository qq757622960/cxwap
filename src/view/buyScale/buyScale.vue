<template>
    <div class="m-scale">
        <a class="back" @click="back"><i class="iconfont icon-fanhuijiantouxiangqingye"></i></a>
        <scroll class="wrapper" ref="scroll">
            <div>
                <section 
                    v-for="(item, index) in imgdata"
                    :key="index"
                    class="m-block">
                        <img :src="item" @load="imgLoader" alt="" />
                </section>
            </div>
        </scroll>
        <a @click="buyScale" class="m-btn">购买体脂称</a>
    </div>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import { mixin } from 'mixin/index'
    import {trigger, TYPES} from 'common/js/bridge'
    export default {
        data() {
            return {
                imgdata: []
            }
        },
        mixins: [mixin],
        methods: {
            imgLoader() {
                this.$refs.scroll.refresh()
            },
            buyScale() {
                console.log('buyScale')
                trigger(TYPES.BUY_SCALE)
            },
            _getImgList() {
                for (let i = 0; i < 12; i += 1) {
                    this.imgdata.push(require(`./${i+5}.png`))
                }
            }
        },
        components: {
            Scroll,
            VHeader
        },
        created() {
            this._getImgList()
        },
        
        mounted() {
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .back
        position fixed
        top 0
        left 0
        z-index 2
        padding 10px
        i 
            font-size 24px
    .m-btn
        position fixed
        bottom 0
        left 0
        right 0
        color #fff
        background-color #ff3d6f
        width 100%
        height 50px
        z-index 3
        display flex
        align-items center
        justify-content center
        font-size 18px
    .m-scale
        position: fixed
        width 100%
        top: 0px
        bottom: 0
        max-width 540px
        min-width 320px
        margin 0 auto
        margin-bottom 50px
        .wrapper
            height 100%
            overflow hidden
    .m-block
        position relative
        width 100%
        .m-btn
            position absolute
            width 137px
            height 36px
            background-color transparent
        .m-dload-1
            bottom 84px
            left 20px
            @media only screen and (min-width: 360px) 
                bottom 94px
            @media only screen and (min-width: 414px)
                bottom 109px
                left 32px
            @media only screen and (min-width: 641px) 
                bottom 140px
                left 43px
                width 177px
                height 46px
        .m-dload-2
            bottom 24px
            left 50%
            transform translateX(-50%)
            @media only screen and (min-width: 360px) 
                bottom 34px
            @media only screen and (min-width: 414px)
                bottom 40px
            @media only screen and (min-width: 641px) 
                bottom 50px
                width 177px
                height 46px
        img 
            width 100%
            height 100%
            object-fit cover
</style>