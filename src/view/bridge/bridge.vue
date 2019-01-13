<template>
    <div class="m-bridge">
        <v-header htitle="桥接测试" @back="back"></v-header>
        <scroll class="wrapper" ref="scroll">
            <div>
                <div class="block">
                    <button @click="reload">reload</button>
                </div>
                <div class="block">
                    <button @click="telPhone">telPhone</button>
                </div>
                <div class="block">
                    <button @click="closeWebView" ref="close" id="close">异步关闭WebView</button>
                </div>
                <div class="block">
                    <button @click="asynCloseWebView" ref="close" id="close">同步关闭WebView</button>
                </div>
                <div class="block">
                    <button @click="isAPP">isAPP</button>
                </div>
                <div class="block">
                    <button @click="consultant">进入顾问咨询页面</button>
                </div>
                <div class="block">
                    <button @click="getUserInfo">获取用户信息</button>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import VHeader from 'base/vheader/vheader'
    import Scroll from 'base/scroll/scroll'
    import {isAPP, trigger, TYPES, closeWebView, asynCloseWebView, reload, telPhone, getUserInfo} from 'common/js/bridge'

    export default {
        data() {
            return {}
        },
        methods: {
            consultant() {
                trigger(TYPES.CONSULTANT).then((data) => {
                    console.log('consultant' + JSON.stringify(data))
                })
            },
            reload() {
                trigger(TYPES.RELOAD).then((data) => {
                    console.log('reload' + JSON.stringify(data))
                })
            },
            telPhone() {
                trigger(TYPES.TEL_PHONE, {'number': 15388888888}).then((data) => {
                    console.log('telPhone' + JSON.stringify(data))
                })
            },
            isAPP() {
                trigger(TYPES.ISAPP).then((data) => {
                    console.log('isAPP' + JSON.stringify(data))
                })
            },
            closeWebView() {
                trigger(TYPES.CLOSE_WEBVIEW, false)
            },
            asynCloseWebView() {
                asynCloseWebView()
            },
            getUserInfo() {
                trigger(TYPES.GET_USERINFO).then((data) => {
                    console.log('getUserInfo' + JSON.stringify(data))
                })
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
            console.log('bridge页面加载...')
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
        .block
            margin-bottom 20px
    button
        border: 0
        width: 150px
        height: 35px
        background-color: orangered
        color: white
        font-size: 16px
        border-radius: 6px
</style>