<template>
    <transition name="slide">
        <div class="chart">
            <v-header :htitle="htitle"></v-header>
            <scroll class="wrapper">
                <div>
                    <slot></slot>
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
        components: {
            VHeader,
            Scroll
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'

    .chart
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        z-index 10
        background-color $color-background
    .wrapper
        background-color #fff
        margin-top 60px
        height 100%
        overflow hidden

    .slide-enter-active, .slide-leave-active
        transition: all 0.3s
    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)

</style>