<template>
    <div class="home">
        <v-header htitle="健康报告列表" @back="back"></v-header>
        <scroll class="home-cont">
            <ul class="home-list">
                <li 
                    v-for="(item, index) in list" 
                    :key="index" 
                    @click="healthDetail($event, item)"
                    class="home-item">
                    {{ item.report_title }}
                    <span class="time">{{ item.date }}</span>
                    <span class="read" v-if="parseInt(item.is_read)">已读</span>
                    <span class="read" v-else>未读</span>
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
            </ul>
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
    import { getHealthReport } from 'api/healthReport'
    import { mixin } from 'mixin/index'
    export default {
        data() {
            return {
                list: [],
                loading: false
            }
        },
        mixins: [mixin],
        methods: {
            async _getHealthReport() {
                this.loading = true
                let userinfo = await trigger(TYPES.GET_USERINFO)
                // let userinfo = { token: '9AF4BF2C84FE33EF0E21964924C1F39232373B4C274707391758AD0231E40CA5', user_id: '35' }
                console.log(userinfo)
                getHealthReport(userinfo, {page_index: 1, pre_page: 10}).then((res) => {
                    console.log(res);
                    if (res.data.ret == 200) {
                        this.list = res.data && res.data.data && res.data.data.list    
                        this.loading = false
                    }
                })
            },
            healthDetail(e, item) {
                this.$router.push({
                    path: `/healthReportDetail/${item.report_id}/${item.report_title}`
                })
            }
        },
        components: {
            VHeader,
            Scroll,
            Loading
        },
        created() {
            this._getHealthReport()
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
    .home
        position: fixed
        width 100%
        top: $fixed-top
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
                .time
                    position absolute
                    right 75px
                    top 50%
                    transform translate3d(0, -50%, 0)
                    font-size 12px
                .read
                    position absolute
                    right 45px
                    top 50%
                    transform translate3d(0, -50%, 0)
                    font-size 12px
                    font-size 12px
</style>