import axios from 'axios'
import { commonParams } from 'api/config'
import { getSign } from 'api/common'

// 获取报表列表
export function getReportList(userinfo = {}) {
    let appsum, skey, data = null
    let url = 'http://172.17.100.31/?service=V1.BodyRecord.GetWeightHistory'
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

