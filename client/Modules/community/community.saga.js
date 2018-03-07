import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as communityService from './community.service'
import * as communityActions from './community.action'
function* handleShareSong() {
    while(true) {
        try {
            const {payload} = yield take(communityActions.SHARE_SONG)
            yield put(communityActions.shareSongDone(payload))
        } catch (err) {
            fork(handleMusicErr, err)
        }
    }
}
function* handleCommunityErr(err) {
    yield call(communityService.showMessage, err)
}
export default function* communitySaga() {
    yield all([
      fork(handleShareSong)
    ])
}