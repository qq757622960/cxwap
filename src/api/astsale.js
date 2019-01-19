/** 
 * @Author: YISHI 
 * @Date: 2019-01-04 16:05:57 
 * @Desc:  售后接口
 */

import axios from 'axios'
import { commonParams } from 'api/config'
import { getSign } from 'api/common'
import { APIURL } from 'api/url'

// 获取售后接口
export function getAfterSaleList() {
    let appsum, skey, data = null
    let url = APIURL + '?service=V1.Wap.AfterSaleList'
    let getsign = getSign({
        interfaceName: 'V1.Wap.AfterSaleList',
        params: {}
    })

    return getsign.then((res) => {
        appsum = res.appsum
        skey = res.skey
        data = Object.assign({ sign: skey, checksum: appsum }, commonParams)

        return axios.get(url, { params: data })
    })
}