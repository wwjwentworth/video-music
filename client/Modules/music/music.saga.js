import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as musicService from './music.service'
import * as musicActions from './music.action'

function* handleGetMusicList() {
    while(true) {
        try {
            const {limit, pagenum} = yield take(musicActions.GET_MUSIC_LIST)
            const {data} = yield call(musicService.getMusicList, limit, pagenum)
            yield put(musicActions.getMusicListDone(data))
        } catch (err) {
            fork(handleMusicErr, err)
        }
    }
}

function* handleGetMusicDetails() {
    while(true) {
        try {
            const {payload} = yield take(musicActions.GET_MUSIC_DETAILS)
            const {data} = yield call(musicService.getMusicDetails, payload)
            yield put(musicActions.getMusicDetailsDone(data))
        } catch (err) {
            fork(handleMusicErr, err)
        }
    }
}


function* handleMusicErr(err) {
    yield call(musicService.showMessage, 'error', err)
}
export default function* videoSaga() {
    yield all([
      fork(handleGetMusicList),
      fork(handleGetMusicDetails),
    ])
}