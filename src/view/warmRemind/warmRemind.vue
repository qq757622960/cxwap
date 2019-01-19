<template>
    <sale htitle="温馨提醒">
        <div class="wrapper">
            <div v-html="data && data[0] && data[0].content"></div>
            <div class="btn" @click="telPhone"></div>
        </div>
    </sale>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import VHeader from 'base/vheader/vheader'
    import Sale from 'base/sale/sale'
    import {trigger, TYPES} from 'common/js/bridge'

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
            async telPhone() {
                let res = await trigger(TYPES.TEL_PHONE, {'number': 4001122819})
            }
        },
        mounted() {},
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
        .btn
            position absolute
            bottom 20px
            left 0
            right 0
            height 240px
            background-color transparent
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