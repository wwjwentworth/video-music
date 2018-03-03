import * as artistActions from './artist.action'
export function artist(state = {
    artistList:null,
    isFetching:false
}, action) {
    switch(action.type) {
        case artistActions.GET_ARTIST_LIST:
            return {
                ...state,
                isFetching:true,
            }
        case artistActions.GET_ARTIST_LIST_DONE:
            return {
                ...state,
                artistList:action.payload,
                isFetching:false
            }
        default:
            return state
    }
}