import * as registerActions from './register.action'
export function register(state = {
    isRepeatName:false,
}, action) {
    switch(action.type) {
        case registerActions.IS_REPEAT_NAME_DONE:
            return {
                ...state,
                isRepeatName:action.payload.isRepeatName
            }
        default:
            return state
    }
}