<template>
    <div>
        <button ref="close" id="close">关闭WebView</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { setupWebViewJavascriptBridge } from 'common/js/bridge'

    export default {
        data() {
            return {}
        },
        methods: {},
        components: {},
        created() {
            alert(111)
            setupWebViewJavascriptBridge(function (bridge) {
                alert('bridge');
                // 监听app事件
                bridge.registerHandler('pushToNewWebSite', function (data, responseCallback) {
                    window.location.href = data.url
                })

                // 触发app事件
                document.getElementById('close').onclick = function() {
                    alert('关闭app')
                    bridge.callHandler('die', {'count': '10'}, function(res) {
                        debugger
                        console.log(res)
                    })
                }
            })
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