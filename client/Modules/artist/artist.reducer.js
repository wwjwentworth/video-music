import * as artistActions from './artist.action'
export function artist(state = {
    artistList:null,
    isLoading:false
}, action) {
    switch(action.type) {
        case artistActions.GET_ARTIST_LIST:
            return {
                ...state,
                isLoading:true,
            }
        case artistActions.GET_ARTIST_LIST_DONE:
            return {
                ...state,
                artistList:action.payload,
                isLoading:false
            }
        default:
            return state
    }
}