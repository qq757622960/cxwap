<template>
    <div class="m-head">
        <a @click="back" class="m-head-back"><i class="iconfont icon-fanhuijiantouxiangqingye"></i></a>
        <h2 class="m-head-title">{{ htitle }}</h2>
        <a class="m-head-right" v-if="hrshow"><i class="iconfont icon-fanhuijiantouxiangqingye"></i></a>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            htitle: {
                type: String,
                default: '导航栏'
            },
            hrshow: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            back(e) {
                this.$emit('back', e)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-head
        position fixed
        top 0
        left 0
        width 100%
        height 50px
        padding-left 10px
        padding-right 10px
        box-shadow 0 1px 3px #ccc
        background-color rgba(255,255,255,.6)
        &::after
            content ''
            position absolute
            z-index 1
            pointer-events none
            background-color #ddd
            height 1px
            left 0
            right 0
            bottom -1px
            @media only screen and (-webkit-min-device-pixel-ratio: 2)
                transform: scaleY(0.5);
                transform-origin: 50% 0%;
        .m-head-back,
        .m-head-right
            padding 10px
            margin-right -10px
            margin-left -10px
            font-weight 200
            i
                font-size 22px
        .m-head-back
            float left
        .m-head-right
            float right
        .m-head-title
            position absolute
            right: 40px
            left: 40px
            line-height 50px
            font-size 18px
            text-align center
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            display inline-block
</style>