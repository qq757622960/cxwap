/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 16:41:07 
 * @Desc: JS APP 桥接 
 */

// 语法&地址
// dsBridge.call(method, [args, callback])
// dsBridge.register(methodName,function)
// https://github.com/wendux/DSBridge-IOS/blob/master/readme-chs.md
// https://github.com/wendux/DSBridge-Android/blob/master/readme-chs.md
// https://blog.csdn.net/duwen90/article/details/78413069

const dsBridge = require("dsbridge")

// 调用app关闭当前webview
export function closeWebView() {
    alert(dsBridge.call('closeWebView'))
}
