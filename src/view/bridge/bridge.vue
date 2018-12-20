<template>
    <div class="m-bridge">
        <v-header htitle="体重变化曲线" @back="back"></v-header>
        <scroll class="wrapper" ref="scroll">
            <div>
                <button @click="closeWebView" ref="close" id="close">关闭WebView</button>
            </div>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'
    import { closeWebView } from 'common/js/bridge'

    export default {
        data() {
            return {}
        },
        methods: {
            closeWebView() {
                closeWebView()
            },
            back() {
                this.$router.back()
            }
        },
        components: {
            VHeader,
            Scroll
        },
        created() {
            
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .m-bridge
        position: fixed
        width 100%
        top: 50px
        bottom: 0
        max-width 540px
        min-width 320px
        margin 0 auto
        .wrapper
            height 100%
            overflow hidden
    button{
        border: 0
        width: 150px
        height: 35px
        background-color: orangered
        color: white
        font-size: 16px
        border-radius: 6px
    }
</style>