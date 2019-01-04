/** 
 * @Author: YISHI 
 * @Date: 2019-01-04 16:18:04 
 * @Desc: 体脂称说明接口 
 */

import axios from 'axios'
import { commonParams } from 'api/config'
import { getSign } from 'api/common'

// export const commonParams = {
//     app_key: '20181120091910000003',
//     curtime: getNowDate(),
//     nonce: 1543300758577,
//     terminal: 'wap',
//     version: '1.0'
// }

// app_key	字符串	必须		最小：20；最大：20	平台分配的appkey
// curtime	字符串	必须		最小：10；最大：10	当前时间戳
// nonce	字符串	必须		最小：1；最大：128	随机数（最大长度128个字符
// terminal	枚举类型	必须		范围：wap / web / android / ios	客户端(1: wap2: web; 3: android 4ios)
// version	字符串	必须			客户端版本号
// checksum	字符串	必须		最小：5
// sign	字符串	必须


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