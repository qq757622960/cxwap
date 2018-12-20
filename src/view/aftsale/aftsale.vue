<template>
    <div class="m-wrapper">
        <v-header htitle="售后客服" @back="back"></v-header>
        <scroll class="wrapper" ref="scroll">
            <div>
                <ul class="sale-list">
                    <li @click="toApplyRefund" class="sale-item">
                        申请退换货
                        <i class="icon iconfont icon-jinrujiantou"></i>
                    </li>
                    <li @click="toAftsaleExplain" class="sale-item">
                        售后政策说明
                        <i class="icon iconfont icon-jinrujiantou"></i>
                    </li>
                    <li @click="toWarmRemind" class="sale-item">
                        温馨提醒
                        <i class="icon iconfont icon-jinrujiantou"></i>
                    </li>
                </ul>
            </div>
        </scroll>

        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'

    export default {
        data () {
            return {}
        },
        methods: {
            back() {
                this.$router.back()
            },
            toWarmRemind() {
                this._toRouter('warmRemind')
            },
            toAftsaleExplain() {
                this._toRouter('aftsaleExplain')
            },
            toApplyRefund() {
                this._toRouter('applyRefund')
            },
            _toRouter(path) {
                this.$router.push({
                    path: path
                })
            },
        },
        created() {
        },
        components: {
            VHeader,
            Scroll
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-wrapper
        position: fixed
        width 100%
        top: 60px
        bottom: 0
        max-width 540px
        min-width 320px
        background-color #fff
        .wrapper
            height 100%
            overflow hidden
            .sale-list
                padding-left 10px
                .sale-item
                    position relative
                    padding 19px 17px 19px 10px
                    font-size 16px
                    .icon
                        position absolute
                        right 17px
                        top 50%
                        transform translate3d(0, -50%, 0)
                        font-size 18px
                        color #bbb
                    &:after
                        content ''
                        position absolute
                        right 0
                        bottom 0
                        left 0
                        height 1px
                        background-color #ddd
                        transform scaleY(.5)
</style>