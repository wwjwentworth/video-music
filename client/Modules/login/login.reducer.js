import * as loginActions from './login.action'
export function login(state = {
    currentUser:{}
}, action) {
    switch(action.type) {
        case loginActions.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser:action.payload[0]
            }
        default:
         return state
    }
}