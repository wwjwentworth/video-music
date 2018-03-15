import * as registerActions from './register.action'
export function register(state = {
    isLoading:false
}, action) {
    switch(action.type) {
        case registerActions.REGISTER:
            return{
                ...state,
                isLoading:true
            }
        case registerActions.REGISTER_DONE:
            return {
                ...state,
                isLoading:false
            }
        default:
            return {
                ...state
            }
    }
}