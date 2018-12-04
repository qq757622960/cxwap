/** 
 * @Author: YISHI 
 * @Date: 2018-12-04 13:19:01 
 * @Desc: 通用接口 
 */

import axios from 'axios'
import { commonParams, ERR_OK } from 'api/config'

/**
 * 获取接口签名
 * @param  {String} interfaceName 接口名称
 * @param  {Object} params 请求数据
 * @return {Promise}
 */
export function getSign(interfaceName, params = {}) {
    let url = 'http://172.17.100.31:8082/req.php?service=' + interfaceName
    let userinfo = {
        user_id: 24,
        token: 'BE52BCDA801ACE78B1CA6A005F2EB9FA312D70A91B3C18856C9E42066D123573'
    }
    let data = Object.assign({}, userinfo, commonParams, params)

    return axios.get(url, { params: data })
        .then(res => Promise.resolve(res.data.data))
        .catch(err => Promise.reject(err))
}