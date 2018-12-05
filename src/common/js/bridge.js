/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 16:41:07 
 * @Desc: JS APP 桥接 
 */

// 语法&地址 具体请参考 README.md
// dsBridge.call(method, [args, callback])
// dsBridge.register(methodName,function)
// https://github.com/wendux/DSBridge-IOS/blob/master/readme-chs.md
// https://github.com/wendux/DSBridge-Android/blob/master/readme-chs.md
// https://blog.csdn.net/duwen90/article/details/78413069

const dsBridge = require("dsbridge")

// 调用app关闭当前webview
// TODO: 关闭当前 WebView
export function closeWebView() {
    dsBridge.call('closeWebView')
}

// 获取当前用户的登录信息
// TODO: 1. 拿到用户信息之后  2. 调用图表接口(该接口需要用户信息)
export function getUserInfo() {
    return new Promise(function(resolve, reject) {
        dsBridge.call('getUserInfo', null, function (data) {
            resolve(data)
        })    
    })
}
