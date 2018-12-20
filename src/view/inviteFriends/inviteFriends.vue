<template>
    <scroll class="wrapper" ref="scroll">
        <div>
            <div class="cont">
                <a class="btn">点击邀请好友</a>
                <ul class="list">
                    <li class="item">
                        1. 活动规则活动规则活动规则活动规则活动规则活动规则
                    </li>
                    <li class="item">
                        2. 活动规则活动规则活动规则活动规则活动规则活动规则
                    </li>
                    <li class="item">
                        3. 活动规则活动规则活动规则活动规则活动规则活动规则
                    </li>
                    <li class="item">
                        4. 活动规则活动规则活动规则活动规则活动规则活动规则
                    </li>
                </ul>
            </div>
        </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'

    export default {
        data () {
            return {}
        },
        methods: {
            back() {
                this.$router.back()
            },
            _refreshScroll() {
                
            }
        },
        created() {
            
        },
        components: {
            Scroll
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper
        width 100%
        height 100%
        max-width 540px
        min-width 320px
        background-color #fff
        div
            height 100%
        .cont
            position relative
            width 100%
            height 854px
            background url('./bg01@2x.png') no-repeat 0 0
            background-size 100% 100%
            .btn
                position absolute
                top 340px
                left 50%
                transform translate(-50%, 0)
                width 240px
                height 40px
                line-height 40px
                border-radius 40px
                text-align center
                color #fff
                font-size 16px
                background-color #ff3d6f
            .list
                position absolute
                top 525px
                left 50%
                transform translate(-50%, 0)
                width 60%
                background-color #fff
                .item
                    padding-bottom 16px
                    color #666
                    font-size 14px

</style>