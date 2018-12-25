<template>
    <sale htitle="温馨提醒">
        <div class="wrapper">
            <div class="content">
                <h2 class="title">尊敬的客户: </h2>
                <p>您好！为了保证您的使用效果您需要注意以下几点：</p>
                <ul>
                    <li>1. 我们的健康顾问电话都是 <a href="tel:10086">10086</a>、<a href="tel:10086">10086</a>号码段，请不要轻信其他冒用我们公司名义的电话，如有疑问，欢迎致电全国售后服务热线：<a href="tel:10086">10086</a></li>
                    <li>2. 在我们为您服务当中，如您对我们的健康顾问服务不满，可在周一至周六9:00-18:00拨打售后服务热线：<a href="tel:10086">10086</a></li>
                </ul>
            </div>
            <div class="footer">
                <a @click.prevent="telPhone" href="tel:400-1122-819">售后服务热线 400-1122-819</a>
            </div>
        </div>
    </sale>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import Sale from 'base/sale/sale'
    import {telPhone} from 'common/js/bridge'

    export default {
        data () {
            return {
                telNumber: 4001122819
            }
        },
        methods: {
            telPhone(event) {
                // 桥接app
                telPhone(this.telNumber)
            }
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
        min-height 98%
        display flex
        flex-direction column
        margin 0 10px 10px 10px
        padding-bottom 50px
        background-color #fff
        border-radius 5px
        .content
            flex 1
            padding 15px 7px
            p,
            li
                text-indent 2em
                font-size 15px
                color #666666
            p
                padding-top 25px
                text-indent 2em
            li
                padding-bottom 25px
                a
                    color #ff3d6f
        .footer
            margin 0 50px
            padding 10px 20px
            border-radius 30px
            background-color #ff3d6f
            font-size 16px
            color #fff
            text-align center
            a
                color #fff

</style>