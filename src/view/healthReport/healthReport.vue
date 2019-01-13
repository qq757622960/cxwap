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
                    <i class="icon iconfont icon-jinrujiantou"></i>
                </li>
            </ul>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'
    import {trigger, TYPES} from 'common/js/bridge'
    import { getHealthReport } from 'api/healthReport'
    import { mixin } from 'mixin/index'
    export default {
        data() {
            return {
                list: []
            }
        },
        mixins: [mixin],
        methods: {
            _getHealthReport() {
                // let userinfo = await trigger(TYPES.GET_USERINFO)
                let userinfo = { token: '9AF4BF2C84FE33EF0E21964924C1F39232373B4C274707391758AD0231E40CA5', user_id: '35' }
                // console.log(userinfo)
                getHealthReport(userinfo, {page_index: 1, pre_page: 10}).then((res) => {
                    console.log(res);
                    if (res.data.ret == 200) {
                        this.list = res.data && res.data.data && res.data.data.list    
                    }
                })
            },
            healthDetail(e, item) {
                this.$router.push({
                    path: `/healthReportDetail/${item.temp_id}/${item.report_title}`
                })
            }
        },
        components: {
            VHeader,
            Scroll
        },
        created() {
            this._getHealthReport()
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
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
</style>