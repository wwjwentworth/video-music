import * as musicActions from './music.action'
export function music(state = {
    musicList:[],
    musicDetails:{}
}, action) {
    switch(action.type) {
        case musicActions.GET_MUSIC_LIST_DONE:
            return {
                ...state,
                musicList:action.payload
            }
        case musicActions.GET_MUSIC_DETAILS_DONE:
            return {
                ...state,
                musicDetails:action.payload
            }
        default:
            return state
    }
}