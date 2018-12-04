/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 16:41:07 
 * @Desc: JS APP 桥接 
 */

export function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    
    let WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
    document.documentElement.appendChild(WVJBIframe)
    
    setTimeout(() => { document.documentElement.removeChild(WVJBIframe) }, 0)
}

setupWebViewJavascriptBridge(function (bridge) {
    // 动态跳转到页面
    bridge.registerHandler('pushToNewWebSite', function (data, responseCallback) {
        window.location.href = data.url
    })

    // 调用app方法
    document.getElementById('close').onclick = function() {
        bridge.callHandler('close', {'count': '10'}, function(res) {
            console.log(res)
        })
    }
})
