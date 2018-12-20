<template>
    <sale htitle="申请退换货">
        <div class="wrapper">
            <h2>申请退换货流程:</h2>
            <ul class="list">
                <li class="item">
                    <img src="./tuihuanhuo@3x.png" alt="" />
                    <h3>1.提出退货申请</h3>
                    <p>顾客提出退换货申请</p>
                </li>
                <li class="item">
                    <img src="./kefu@3x.png" alt="" />
                    <h3>2.售后客服跟进沟通细节</h3>
                    <p>与健康顾问提出退换需求或主动联系售后客服: 400-1122-819</p>
                </li>
                <li class="item">
                    <img src="./huiji@3x.png" alt="" />
                    <h3>3.客户回寄产品</h3>
                    <p>客户回寄所有剩余产品（未开封及已开封产品）、服务卡及原快递单</p>
                </li>
                <li class="item">
                    <img src="./cangku@3x.png" alt="" />
                    <h3>4.仓库签收后验货</h3>
                    <p>仓库签收后验货，检查回寄商品是否是我司产品、是否包装完好等</p>
                </li>
                <li class="item">
                    <img src="./shenhe@3x.png" alt="" />
                    <h3>5.售后提交审核中心审核</h3>
                    <p>根据您回寄的产品及所提需求提交审核中心进行审核评估</p>
                </li>
                <li class="item">
                    <img src="./shenhejieguo@3x.png" alt="" />
                    <h3>6.回复审核结果</h3>
                    <p>回复审核最终处理结果，退款时效为3-5个工作日</p>
                </li>
            </ul>
        </div>
    </sale>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import Sale from 'base/sale/sale'

    export default {
        data () {
            return {}
        },
        methods: {
            
        },
        created() {
        },
        components: {
            VHeader,
            Scroll,
            Sale
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper
        min-height 100%
        background-color #fff
        h2
            padding 24px 16px 20px
            font-size 16px
            font-weight 400
            color #000
        .list
            display flex
            flex-wrap wrap
            border-top 1px solid #ccc
            .item
                width 33.33%
                min-height 185px
                padding 20px 10px 20px 10px
                border-right  1px solid #ccc
                border-bottom 1px solid #ccc
                text-align center
                img
                    width 43px
                    height 43px
                    margin 0 auto
                h3
                    min-height 70px
                    line-height 1.2
                    padding-top 16px
                    font-size 16px
                    color #000
                    text-align left
                p
                    font-size 14px
                    color #666
                    text-align left
</style>