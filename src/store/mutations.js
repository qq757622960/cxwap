import * as type from './mutations_type'

const mutation = {
    [type.SET_USERINFO](state, userinfo) {
        state.userinfo = userinfo
    }
}

export default mutation