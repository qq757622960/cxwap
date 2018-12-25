/** 
 * @Author: YISHI 
 * @Date: 2018-12-25 09:12:39 
 * @Desc: 操作的常用方法
 */

import {trigger, TYPES} from 'common/js/bridge'

export const mixin = {
    methods: {
        back() {
            trigger(TYPES.CLOSE_WEBVIEW, null, false)
        },
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
}