/** 
 * @Author: YISHI 
 * @Date: 2018-12-25 17:42:18 
 * @Desc: 详情接口 
 */

import axios from 'axios'
import { commonParams } from 'api/config'
import { getSign } from 'api/common'
import { APIURL } from 'api/url'

// 获取详情列表
export function getCmsInfo(userinfo = {}, cid) {
    let appsum, skey, data = null
    let url = APIURL + '?service=V1.Cms_Channel.CmsInfo'
    let getsign = getSign({
        interfaceName: 'V1.Cms_Channel.CmsInfo',
        userinfo: userinfo,
        params: { cms_id: cid}
    })

    return getsign.then((res) => {
        appsum = res.appsum
        skey = res.skey
        data = Object.assign({ sign: skey, checksum: appsum }, { cms_id: cid }, userinfo, commonParams)

        return axios.get(url, { params: data })
    })
}




