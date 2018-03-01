import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as playerActions from './player.action'
import * as playerService from './player.service'
function* handlePlaySong() {
    while(true) {
        try {
            const {payload} = yield take(playerActions.PLAY_SONG)
            const {data:{data}} = yield call(playerService.playSong, payload.id)
            const {url} = data[0]
            if(url) {
                const song = {
                    ...payload,
                    url
                }
                yield put(playerActions.playSongDone(song))
            }
        } catch (err) {
            fork(handlePlayerErr, err)
        }
    }
}
function* handlePlayerErr(err) {
    yield call(videoService.showMessage, 'error', err)
}
export default function* playerSaga() {
    yield all([
      fork(handlePlaySong),
    ])
}