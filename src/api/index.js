import axios from 'axios'

// 首页测试
export function getIndex() {
    let url = 'http://b2b2c.shopnctest.com/dema/mo_bile/index.php?act=index'
    return axios.get(url, {}).then((res) => {
        return Promise.resolve(res)
    }, (err) => {
        return Promise.reject(res)
    })
}