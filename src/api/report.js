import axios from 'axios'
import { commonParams, ERR_OK } from 'api/config'
import { getSign } from 'api/common'

// 获取报表列表
export function getReportList() {
    let url = 'http://172.17.100.31/?service=V1.BodyRecord.GetWeightHistory'
    let userinfo = {
        user_id: 24,
        token: 'BE52BCDA801ACE78B1CA6A005F2EB9FA312D70A91B3C18856C9E42066D123573'
    }
    // 获取签名
    let getsign = getSign('V1.BodyRecord.GetWeightHistory')

    return getsign.then((res) => {
        let { appsum, skey } = res
        let data = Object.assign({
            sign: skey, 
            checksum: appsum
        }, userinfo, commonParams)

        return axios.get(url, { params: data })
    })
}

