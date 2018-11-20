import axios from 'axios'

// 首页测试
export function getReportList() {
    return {
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '123', '456'],
        sData: [820, 932, 901, 934, 1290, 1330, 1320, 1233, 1800]
    }
    // let url = 'http://b2b2c.shopnctest.com/dema/mo_bile/index.php?act=index'
    // return axios.get(url, {}).then((res) => {
    //     return Promise.resolve(res)
    // }, (err) => {
    //     return Promise.reject(res)
    // })
}