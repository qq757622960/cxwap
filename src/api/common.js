/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 13:19:01 
 * @Desc: 通用接口 
 */

import axios from 'axios'
import { commonParams, ERR_OK } from 'api/config'


/**
 * 获取签名
 * @param {Object} options
 * options.interfaceName: 接口名称
 * options.userinfo: 用户信息
 * options.params: 获取其他参数
 */
export function getSign(options) {
    // let {interfaceName, params, userinfo} = options
    let {interfaceName, userinfo, params} = options
    let url = 'http://172.17.100.31:8082/req.php?service=' + interfaceName
    let data = Object.assign({}, commonParams, userinfo)
    let paramsObj = Object.assign({}, data, params)

    return axios.get(url, { params: paramsObj})
        .then(res => Promise.resolve(res.data.data))
        .catch(err => Promise.reject(err))
}