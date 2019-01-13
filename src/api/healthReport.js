/** 
 * @Author: YISHI 
 * @Date: 2019-01-12 14:48:33 
 * @Desc: 健康报告接口 
 */

import axios from 'axios'
import { commonParams } from 'api/config'
import { getSign } from 'api/common'

// 获取健康报告接口
export function getHealthReport(userinfo = {}, params = {}) {
    let appsum, skey, data = null
    let url = 'http://172.17.100.31/?service=V1.HealthReport.HealthReportList'
    let getsign = getSign({
        interfaceName: 'V1.HealthReport.HealthReportList',
        userinfo: userinfo,
        params: params
    })

    return getsign.then((res) => {
        appsum = res.appsum
        skey = res.skey
        data = Object.assign({}, { sign: skey, checksum: appsum }, userinfo, params, commonParams)

        return axios.get(url, { params: data })
    })
}

// 获取健康详情接口
export function getHealthReportDetail(userinfo = {}, params = {}) {
    let appsum, skey, data = null
    let url = 'http://172.17.100.31/?service=V1.HealthReport.HealthReportTemplate'
    let getsign = getSign({
        interfaceName: 'V1.HealthReport.HealthReportTemplate',
        userinfo: userinfo,
        params: params
    })

    return getsign.then((res) => {
        appsum = res.appsum
        skey = res.skey
        data = Object.assign({}, { sign: skey, checksum: appsum }, userinfo, params, commonParams)

        return axios.get(url, { params: data })
    })
}