import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as musicService from './music.service'
import * as musicAction from './music.action'

function* handleGetMusicList() {
    while(true) {
        try {
            const {limit, pagenum} = yield take(musicAction.GET_MUSIC_LIST)
            const {data} = yield call(musicService.getMusicList, limit, pagenum)
            yield put(musicAction.getMusicListDone(data))
        } catch (err) {
            fork(handleMusicErr, err)
        }
    }
}
function* handleMusicErr(err) {
    yield call(videoService.showMessage, 'error', err)
}
export default function* videoSaga() {
    yield all([
      fork(handleGetMusicList),
    ])
}