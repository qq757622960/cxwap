/** 
 * @Author: YISHI 
 * @Date: 2019-01-16 10:07:21 
 * @Desc: Axios 接口请求通用方法
 */

import axios from 'axios'
import { ERR_OK } from 'api/config'

const debug = process.env.NODE_ENV === 'development'               // 是否是开发服
const devSignURL  = 'http://172.17.100.31:8082/req.php?service='   // 开发服签名URL
const testSignURL = 'http://172.17.100.31:8082/req.php?service='   // 测试服服签名URL
const devURL      = 'http://172.17.100.31/?service='                        // 开发服服签名URL
const testURL     = 'http://106.15.91.31/?service='                         // 测试服URL

// 通用参数
const commonParams = {
    app_key: debug ? '20181120091910000003' : '20181120091920000003',
    curtime: _getNowDate(),
    nonce: _getNowDate() * 1000,
    terminal: 'wap',
    version: '1.0'
}

/**
 * 创建 Axios 实例
 */
const instance = axios.create({
    timeout: 10000,
    transformResponse: [function(data) {
        if (typeof data !== 'object') {
            data = JSON.parse(data)
        }
        if (data.ret === ERR_OK) {
            
        }
    }]
})

/**
 * GET 请求
 */
export async function GET(options) {
    let { interfaceName, userinfo, params } = options
    let url = _getURL() + interfaceName
    let res = await _getSign({ interfaceName, userinfo, params })
    let paramsObj = Object.assign({ sign: res.data.skey, checksum: res.data.appsum }, commonParams, userinfo, params)

    if (res.ret === ERR_OK) {
        return instance.get(url, { params: paramsObj })
            .then(successHandler)
            .catch(errorHandler)
    }
}

/**
 * 获取签名
 * @param {Object} options
 * options.interfaceName: 接口名称
 * options.userinfo:      用户信息
 * options.params:        获取其他参数
 */
function _getSign(options) {
    let { interfaceName, userinfo, params } = options
    let url = _getSignURL() + interfaceName
    let paramsObj = Object.assign({}, commonParams, userinfo, params)

    return instance.get(url, { params: paramsObj })
        .then(successHandler)
        .catch(errorHandler)
}

/**
 * 获取签名 URL
 */
function _getSignURL() {
    return debug ? devSignURL : testSignURL
}

/**
 * 获取正常 URL
 */
function _getURL() {
    return debug ? devURL : testURL
}

/**
 * 获取当前时间
 */
function _getNowDate() {
    return Math.floor(new Date() / 1000)
}




















function successHandler(response) {
    return response && response.data
}

function errorHandler(error) {
    console.log(error)
    return Promise.reject(error)
}
