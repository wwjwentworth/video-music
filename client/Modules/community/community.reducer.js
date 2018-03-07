import * as communityActions from './community.action'
export function community(state = {
    musicList:[],
    videoList:[]
}, action) {
    switch(action.type) {
        case communityActions.SHARE_SONG_DONE:
            let musicList = state.musicList.concat()
            musicList.push(action.payload)
            return{
                ...state,
                musicList:musicList
            }
        default:
            return state
    }
}