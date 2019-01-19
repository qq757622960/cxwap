import axios from 'axios'
import { commonParams } from 'api/config'
import { getSign } from 'api/common'
import { APIURL } from 'api/url'

// 获取报表列表
export function getReportList(userinfo = {}) {
    let appsum, skey, data = null
    let url = APIURL + '?service=V1.BodyRecord.GetWeightHistory'
    let getsign = getSign({
        interfaceName: 'V1.BodyRecord.GetWeightHistory',
        userinfo: userinfo
    })

    return getsign.then((res) => {
        appsum = res.appsum
        skey = res.skey
        data = Object.assign({ sign: skey, checksum: appsum}, userinfo, commonParams)
        
        return axios.get(url, { params: data })
    })
}

