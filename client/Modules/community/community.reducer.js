import * as communityActions from './community.action'
export function community(state = {
    communityList:[]
}, action) {
    switch(action.type) {
        case communityActions.GET_COMMUNITY_DATA_DONE:
            return{
                ...state,
                communityList:action.payload
            }
        case communityActions.THUMB_UP_DONE:
            return{
                ...state,
                communityList:action.payload
            }
        default:
            return state
    }
}