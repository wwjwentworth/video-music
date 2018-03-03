import * as musicActions from './music.action'
export function music(state = {
    pageNum: 0,
    limit: 30,
    scrollPoint: 0,
    isFetching: false,
    musicList:[],
    musicDetails:{}
}, action) {
    switch(action.type) {
        case musicActions.GET_MUSIC_LIST:
            return {
                ...state,
                isFetching:true
            }
        case musicActions.GET_MUSIC_LIST_DONE:
            return {
                ...state,
                musicList:[...state.musicList, ...action.payload],
                isFetching:false,
                pageNum:state.pageNum + 1
            }
        case musicActions.GET_MUSIC_DETAILS_DONE:
            return {
                ...state,
                musicDetails:action.payload,
                isFetching:false
            }
        default:
            return state
    }
}