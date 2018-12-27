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

// 桥接事件名称
export const TYPES = {
    CLOSE_WEBVIEW: 'closeWebView',
    TEL_PHONE: 'telPhone',
    GET_USERINFO: 'getUserInfo',
    RELOAD: 'reload',
    ISAPP: 'isAPP'
}

/**
 * 桥接 app 通用方法
 * @param {String} name
 * @param {String} param
 * @param {String} async 是否是异步(默认是异步)
 */
export function trigger(name, param = {}, async = true) {
    if (!async) {
        return dsBridge.call(name)
    }
    return new Promise(function(resolve, reject) { 
        dsBridge.call(name, param, function(data) {
            if (typeof data !== 'object') {
                data = JSON.parse(data)
            }
            resolve(data)
        })
    })
}


































//============================ 已经不用的了 ==============================
// 调用app关闭当前webview
// TODO: 关闭当前 WebView
export function closeWebView() {
    dsBridge.call('closeWebView', function(data) {
        alert('异步:' + JSON.stringify(data))
    })
}

// 同步关闭 WebView
export function asynCloseWebView() {
    dsBridge.call('closeWebView')
}
// export function closeWebView() {
//     return new Promise(function(resolve, reject) {
//         dsBridge.call('closeWebView', function (data) {
//             resolve(data)
//         })
//     })
// }

// 调用app拨打电话
// TODO: 拨打电话
export function telPhone(telNumber) {
    return new Promise(function(resolve, reject) {
        dsBridge.call('telPhone', { "number": telNumber }, function (data) {
            resolve('async: 拨打电话')
        })
    })
    
}

// 获取当前用户的登录信息
// TODO: 1. 拿到用户信息之后  2. 调用图表接口(该接口需要用户信息)
export function getUserInfo() {
    return new Promise(function(resolve, reject) {
        dsBridge.call('getUserInfo', function (data) {
            resolve(data ? data : undefined)
        })
    })
}

// TODO: 重新加载页面
export function reload() {
    return new Promise(function(resolve, reject) {
        dsBridge.call('reload', function (data) {
            resolve('async: 重新加载页面')
        })
    })
}

// 判断当前页面是否在 APP 中
// TODO: 判断是否在 APP 中
export function isAPP() {
    return new Promise(function(resolve, reject) {
        dsBridge.call('isAPP', function (data) {
            resolve(data ? data : undefined)
        })
    })
}
