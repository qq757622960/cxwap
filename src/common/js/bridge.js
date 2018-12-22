/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 16:41:07 
 * @Desc: JSAPP桥接 
 */

// 语法&地址 具体请参考 README.md
// dsBridge.call(method, [args, callback])
// dsBridge.register(methodName,function)
// https://github.com/wendux/DSBridge-IOS/blob/master/readme-chs.md
// https://github.com/wendux/DSBridge-Android/blob/master/readme-chs.md
// https://blog.csdn.net/duwen90/article/details/78413069

const dsBridge = require("dsbridge")

// 判断是否在 app 中
export const ISAPP = isAPP()

// 调用app关闭当前webview
// TODO: 关闭当前 WebView
export function closeWebView() {
    dsBridge.call('closeWebView')
}

// 调用app拨打电话
// TODO: 拨打电话
export function telPhone(telNumber) {
    dsBridge.call('telPhone', {"number": telNumber})
}

// 获取当前用户的登录信息
// TODO: 1. 拿到用户信息之后  2. 调用图表接口(该接口需要用户信息)
export function getUserInfo() {
    dsBridge.call('getUserInfo', function (data) {
        if (typeof data !== 'object') {
            try {
                return JSON.parse(data)
            } catch (e) {
                console.log('JSON格式不正确');
            }
        }
    })
}

// TODO: 重新加载页面
export function reload() {
    dsBridge.call('reload')
}

// 判断当前页面是否在 APP 中
// TODO: 判断是否在 APP 中
function isAPP() {
    return dsBridge.call('isAPP', function (data) {
        return data ? data : undefined
    })
}
