/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 10:06:45 
 * @Desc: 获取10位时间戳 
 */

export function getNowDate() {
    return Math.round(new Date() / 1000)
}

export function getTimestamp(timestamp) {
    timestamp = timestamp || getNowDate()
    return timestamp * 1000
}