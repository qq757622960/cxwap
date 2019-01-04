<template>
    <div class="home">
        <v-header htitle="首页"></v-header>
        <scroll class="home-cont">
            <!-- <div class="block">
                <button @click="reload">reload</button>
            </div> -->
            <ul class="home-list">
                <li @click="toReport" class="home-item">
                    报表页面
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toDload" class="home-item">
                    下载页面
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toCdetail" class="home-item">
                    内容详情
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toAftsale" class="home-item">
                    售后客服
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toWeightShare" class="home-item">
                    体重分享
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toInviteFriends" class="home-item">
                    邀请好友
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toBuyScale" class="home-item">
                    购买体脂称
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toLife" class="home-item">
                    生命周期
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
                <li @click="toBridge" class="home-item">
                    桥接页面
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'
    import {ISAPP, testSyn, reload, telPhone, closeWebView, getUserInfo, webDidLoad} from 'common/js/bridge'

    export default {
        data() {
            return {}
        },
        methods: {
            reload() {
                reload()
            },
            toWeightShare() {
                this._toRouter('/weightShare')
            },
            toInviteFriends() {
                this._toRouter('/inviteFriends')
            },
            toReport() {
                this._toRouter('/report')
            },
            toDload() {
                this._toRouter('/dload')
            },
            toBridge() {
                this._toRouter('/bridge')
            },
            toCdetail() {
                this._toRouter('/cdetail/detail_id/2')
            },
            toAftsale() {
                this._toRouter('/aftsale')
            },
            toLife() {
                this._toRouter('/life')
            },
            toBuyScale() {
                this._toRouter('/buyScale')
            },
            _toRouter(path) {
                this.$router.push({
                    path: path
                })
            }
        },
        components: {
            VHeader,
            Scroll
        },
        created() {
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .home
        position: fixed
        width 100%
        top: 60px
        bottom: 0
        max-width 540px
        min-width 320px
        background-color #fff
        .home-cont
            height 100%
            overflow hidden
            .home-list
                padding-left 10px
                .home-item
                    position relative
                    padding 11px 15px
                    font-size 16px
                    .icon
                        position absolute
                        right 15px
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