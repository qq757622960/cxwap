/** 
 * @Author: YISHI 
 * @Date: 2019-01-04 16:18:04 
 * @Desc: 体脂称说明接口 
 */

import axios from 'axios'
import { commonParams } from 'api/config'
import { getSign } from 'api/common'

// 获取体脂称说明
export function getScaleExplain() {
    let appsum, skey, data = null
    let url = 'http://172.17.100.31/?service=V1.Wap.ScaleExplain'
    let getsign = getSign({
        interfaceName: 'V1.Wap.ScaleExplain',
        params: {}
    })

    return getsign.then((res) => {
        appsum = res.appsum
        skey = res.skey
        data = Object.assign({ sign: skey, checksum: appsum }, commonParams)

        return axios.get(url, { params: data })
    })
}