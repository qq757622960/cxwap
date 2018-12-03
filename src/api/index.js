import axios from 'axios'
import jsonp from 'jsonp'

// jsonp测试
export function getGoodsList() {
    let url = 'http://b2b2c.shopnctest.com/dema/mo_bile/index.php'
    let data = {
        act: 'goods',
        op: 'goods_list',
        keyword: "洗车",
        page: 10,
        curpage: 1,
        keyword: "洗车",
        _: "1543717791958"
    }
    let opts = {
        param: 'callback',
        timeout: 50000
    }

    url = _params(url, data)
    console.log(url);
    return new Promise(function(resolve, reject) {
        jsonp(url, opts, function (err, data) {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

// 首页测试
export function getIndex() {
    let url = 'http://b2b2c.shopnctest.com/dema/mo_bile/index.php?act=index'
    return axios.get(url, {}).then((res) => {
        return Promise.resolve(res)
    }, (err) => {
        return Promise.reject(res)
    })
}

// 拼接URL参数
function _params(url, data) {
    url += ~url.indexOf('?') ? '&' : '?'

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const item = data[key]
            url += `${key}=${item}&`
        }
    }
    return url.replace(/&$/, '')
    // return url.substr(0, url.length - 1)
}
