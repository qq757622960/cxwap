/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 13:25:35 
 * @Desc: 报表类 
 */

export default class Report {
    constructor({ ctime, weight }) {
        this.ctime = formatDate(ctime)
        this.weight = weight
    }
}

/**
 * 格式化时间 m/d/y
 * @param  {Number|String} temp  时间戳
 * @return 返回格式化的时间
 */
function formatDate(temp) {
    let date = new Date(temp * 1000)
    return `${date.getMonth() + 1}/${date.getDate()}\n${date.getFullYear()}`
}