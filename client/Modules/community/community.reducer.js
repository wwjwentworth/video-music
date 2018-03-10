import * as communityActions from './community.action'
export function community(state = {
    communityList: [],
    isloading:false
}, action) {
    switch (action.type) {
        case communityActions.GET_COMMUNITY_DATA:
            return{
                ...state,
                isloading:true
            }
        case communityActions.GET_COMMUNITY_DATA_DONE:
            return {
                ...state,
                communityList: action.payload,
                isloading:false
            }
        case communityActions.THUMB_UP:
            return{
                ...state,
                isloading:true,
            }
        case communityActions.THUMB_UP_DONE:
            return {
                ...state,
                communityList: action.payload,
                isloading:false
            }
        case communityActions.COMMENT:
            return{
                ...state,
                isloading:true,
            }
        case communityActions.COMMENT_DONE:
            return {
                ...state,
                communityList: action.payload,
                isloading:false
            }
        default:
            return state
    }
}