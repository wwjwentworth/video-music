import * as musicActions from './music.action'
export function music(state = {
    musicList:[]
}, action) {
    switch(action.type) {
        case musicActions.GET_MUSIC_LIST_DONE:
            return {
                ...state,
                musicList:action.payload
            }
        default:
            return state
    }
}