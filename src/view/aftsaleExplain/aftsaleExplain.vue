<template>
    <sale htitle="售后政策说明">
        <div class="cont">
            <div v-html="data && data[1] && data[1].content"></div>
            <!-- <ul class="list">
                <li class="item">
                    <span>1.</span>
                    因产品质量问题，自收到产品签收日起3个工作日内联系售后热线中心处理
                </li>
                <li class="item">
                    <span>2.</span>
                    对于产品的质量，以及产品错发、漏发、破损问题所产生的邮费，将由我司承担往返运费
                </li>
                <li class="item">
                    <span>3.</span>
                    退换品在购买时如为优惠装或附有赠品，须将已优惠或赠送的产品/物品一并退回
                </li>
                <li class="item">
                    <span>4.</span>
                    在商品无任何情况下，自实际收到商品之日起7日内，商品往返运费由客户承担
                </li>
            </ul> -->
        </div>
    </sale>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import Sale from 'base/sale/sale'

    export default {
        props: {
            data: {
                default: {},
                type: Object
            }
        },
        data () {
            return {}
        },
        methods: {
            back() {
                this.$router.back()
            }
        },
        created() {
            console.log(this.data)
        },
        components: {
            VHeader,
            Scroll,
            Sale
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s
    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)

    .m-bscroll
        position: fixed
        top: 0
        right 0
        bottom: 0      
        left 0
        width 100%  
        background-color #fff
        .wrapper
            margin-top 60px
            height 100%
            overflow hidden

    .cont
        margin 0 10px 10px 10px
    .list
        .item
            position relative
            padding 18px 15px 18px 40px
            margin-bottom 10px
            background-color #fff
            font-size 16px
            color #666
            border-radius 5px
            span 
                font-size 20px
                color #666
                font-weight 700
                position absolute
                left 15px
                top 50%
                transform translate(0, -50%)
</style>