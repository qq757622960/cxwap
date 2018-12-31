<template>
    <div class="m-wrapper">
        <v-header htitle="内容详情" @back="back"></v-header>
        <scroll class="wrapper" ref="scroll">
            <div class="m-cdetail" v-show="data">
                <div v-show="content">
                    <div v-html="content"></div>
                    <div class="m-footer">
                        <div class="read">
                            <img src="./read@3x.png" alt="" />
                            <span>{{ data && data.views }}人阅读</span>
                        </div>
                        <p class="finally">The End</p>
                    </div>
                </div>
                <div v-show="!content" class="no-data">暂无数据</div>
            </div>
            <div class="loading-container" v-show="loading">
                <loading></loading>
            </div>
        </scroll>
    </div>
    <!-- <div class="m-title">
        <h2>如何劝告父母少吃主食，低碳饮食？</h2>
        <span>发布于昨天</span>
    </div>
    <div class="m-logo">
        <img src="./logo@3x.png" alt="" />
        <span>梦幻体型<em>.</em>轻松享瘦</span>
    </div>
    <div class="m-article">
        <p>昨天写了一篇粽子的科普文章, 一个读者的留言, 让我思考了很多</p>
        <img src="./pic@3x.png" alt="" />
        <p>越来越多的人了解到, 糖和米面等淀粉类主食吃多了, 非常容易导致肥胖, 糖尿病, 脂肪肝, 高血压, 心脏病等等问题</p>
        <p>可是，为什么我们的父母不愿意听我们的, 我们应该怎么做, 才能慢慢的改变他们的老观念呢？</p>
        <p>昨天写了一篇粽子的科普文章, 一个读者的留言, 让我思考了很多</p>
        <img src="./pic@3x.png" alt="" />
        <p>越来越多的人了解到, 糖和米面等淀粉类主食吃多了, 非常容易导致肥胖, 糖尿病, 脂肪肝, 高血压, 心脏病等等问题</p>
        <p>可是，为什么我们的父母不愿意听我们的, 我们应该怎么做, 才能慢慢的改变他们的老观念呢？</p>
    </div> -->
</template>


<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import Loading from 'base/loading/loading'
    import { mixin } from 'mixin/index'
    import { getCmsInfo } from 'api/cdetail'
    import {trigger, TYPES} from 'common/js/bridge'

    export default {
        data () {
            return {
                data: null,
                content: '',
                loading: false
            }
        },
        mixins: [mixin],
        methods: {
            _refreshScroll() {
                // imgElemList Android 不支持 Element.forEach, 所以转换类数据
                let imgElemList = document.querySelectorAll('img')
                let imgList = Array.prototype.slice.call(imgElemList)
                let img, item, that = this

                for (let i = 0; i < imgList.length; i++) {
                    item = imgList[i]
                    img = new Image()
                    img.src = item.src
                    img.onload = function() {
                        console.log('onload')
                        that.$refs.scroll.refresh()
                    }
                }
            },
            async _getCmsInfo() {
                this.loading = true
                // let userinfo = await trigger(TYPES.GET_USERINFO)
                let userinfo = { token: '963EF743A722C4C6CC552DECEC9DE71444AD3DDC1A08C486D43A04C6ABC40EFB', user_id: '35' }
                let cid = this.$route.params.id
                console.log(userinfo, cid)

                getCmsInfo(userinfo, cid).then((res) => {
                    if (res.data.data.code === 0) {
                        this.data = res.data.data
                        this.content = res.data.data.content
                        this.loading = false
                        // 去刷新页面
                        setTimeout(() => {
                            this._refreshScroll()    
                        }, 20)
                    }
                })
            }
        },
        created() {
            this._getCmsInfo()
        },
        components: {
            VHeader,
            Scroll,
            Loading
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
    .m-wrapper
        position: fixed
        width 100%
        top: 50px
        bottom: 0
        max-width 540px
        min-width 320px
        background-color #fff
        .wrapper
            height 100%
            overflow hidden
        .m-cdetail
            padding 20px
            img
                width 100%
            .no-data
                height 70vh
                display flex
                align-items center
                justify-content center
            .m-title
                position relative
                padding-bottom 20px
                &:after
                    content ''
                    position absolute
                    bottom 0
                    left 0
                    right 0
                    height 1px
                    background-color #ddd
                    transform scaleY(.5)
                h2
                    padding-bottom 10px
                    font-size 16px
                    color #000
                span
                    font-size 13px
                    color #999
            .m-logo
                display flex
                align-items center
                justify-content center
                position relative
                padding 20px 0
                &:after
                    content ''
                    position absolute
                    bottom 0
                    left 0
                    right 0
                    height 1px
                    background-color #ddd
                    transform scaleY(.5)
                img
                    width 62px
                    height 45px
                span
                    padding-left 15px
                    font-size 16px
                    font-weight 700
                    em
                        width: 4px
                        height: 4px
                        display: inline-block
                        text-indent: -9999px
                        background-color: #666
                        border-radius: 50%
                        position: relative
                        transform: translate(0, 10px)
                        margin: 0 3px
            .m-article
                padding 25px 0
                p,
                img
                    padding-bottom 25px
                img
                    width 100%
                    height auto
                p
                    font-size 16px
                    font-weight 100
                    line-height 1.5
            .m-footer
                .read
                    padding-bottom 25px
                    border-bottom: 1px dotted #ddd
                    img,
                    span 
                        vertical-align middle
                    img 
                        width 22px
                        height 16px
                    span
                        font-size 14px
                        color #ccc
                .finally
                    padding 15px 0 25px 0
                    color #ccc
                    font-size 16px
                    text-align center




</style>