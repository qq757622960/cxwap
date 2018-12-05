<template>
    <div>
        <button @click="closeWebView" ref="close" id="close">关闭WebView</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { closeWebView } from 'common/js/bridge'

    export default {
        data() {
            return {}
        },
        methods: {
            closeWebView() {
                closeWebView()
            }
        },
        components: {},
        created() {
            
        },
        mounted() {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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