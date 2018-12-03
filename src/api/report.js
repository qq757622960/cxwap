import axios from 'axios'
import * as config from './config'

// 获取报表数据
export function getReportList() {
    let url = 'http://172.17.100.31/?service=V1.BodyRecord.GetWeightHistory'
    let app_key = config.APP_KEY
    let curtime = Math.round(new Date() / 1000)
    let nonce = 1543300758577

    return getSign().then((res) => {
        let { appsum, skey} = res.data.data
        return axios.get(url, {
            params: {
                app_key: app_key,
                curtime: curtime,
                nonce: nonce,
                checksum: appsum,
                sign: skey,
                terminal: 'wap',
                version: '1.0',
                user_id: 24,
                token: 'BE52BCDA801ACE78B1CA6A005F2EB9FA312D70A91B3C18856C9E42066D123573'
            }
        })
        .then(function (response) {
            return Promise.resolve(response)
        })
        .catch(function (error) {
            console.log(error)
        })
    })
}

// 获取签名
function getSign() {
    let url = 'http://172.17.100.31:8082/req.php?service=V1.BodyRecord.GetWeightHistory'
    let app_key = '20181120091910000003'
    let curtime = Math.round(new Date() / 1000)
    let nonce = 1543300758577

    return axios.get(url, {
        params: {
            app_key: app_key,
            curtime: curtime,
            nonce: nonce,
            terminal: 'wap',
            version: '1.0',
            user_id: 24,
            token: 'BE52BCDA801ACE78B1CA6A005F2EB9FA312D70A91B3C18856C9E42066D123573'
        }
    }).then(res => Promise.resolve(res))
}