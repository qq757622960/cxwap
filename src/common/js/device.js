/** 
 * @Author: YISHI 
 * @Date: 2018-11-29 08:51:25 
 * @Desc 判断设备
 */

export function device(key) {
    let agent = navigator.userAgent.toLowerCase()

    let getVersion = function (label) {
        let exp = new RegExp(label + '/([^\\s\\_\\-]+)')
        label = (agent.match(exp) || [])[1]
        return label || false
    }
    let result = {
        os: function() {
            if (/windows/.test(agent)) {
                return 'windows'
            } else if (/linux/.test(agent)) {
                return 'linux'
            } else if (/iphone|ipod|ipad|ios/.test(agent)) {
                return 'ios'
            } else if (/mac/.test(agent)) {
                return 'mac'
            }
        }(),
        weixin: getVersion('micromessenger')
    }

    if (key && !result[key]) {
        result[key] = getVersion(key)
    }

    result.android = /android/.test(agent)
    result.ios = result.os === 'ios'

    return result
}