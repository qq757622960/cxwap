/** 
 * @Author: YISHI 
 * @Date: 2019-01-15 15:40:23 
 * @Desc: 开发服、测试服、正式服地址切换 
 */

const devURL = 'http://172.17.100.31/'   // 开发服
const testURL = 'http://106.15.91.31/'   // 测试服

let APIURL = 'http://172.17.100.31/'     // 默认是开发服

if (process.env.NODE_ENV !== 'development') {
    APIURL = testURL
}

export { APIURL }

