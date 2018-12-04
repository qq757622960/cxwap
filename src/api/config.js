import { getNowDate, getTimestamp } from 'common/js/date'
import { getUid } from 'common/js/uid'

export const commonParams = {
    app_key: '20181120091910000003',
    curtime: getNowDate(),
    nonce: 1543300758577,
    terminal: 'wap',
    version: '1.0'
}

export const ERR_OK = 0