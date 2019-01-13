<template>
    <transition name="slide">
        <div class="sale">
            <v-header :htitle="htitle" @back="back"></v-header>
            <scroll class="wrapper">
                <div>
                    <slot></slot>
                    <div style="height:60px;"></div>
                </div>
            </scroll>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'

    export default {
        data() {
            return {}
        },
        props: {
            htitle: {
                type: String,
                default: '图表标题'
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        },
        components: {
            VHeader,
            Scroll
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'
    .sale
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        z-index 10
        width 100%
        background-color $color-background
    .wrapper
        margin-top 54px
        height 100%
        overflow hidden
        div
            // height 100% // 此处高度 100% 会导致页面滑不动

    .slide-enter-active, .slide-leave-active
        transition: all 0.3s
    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)

</style>