import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as artistService from './artist.service'
import * as artistActions from './artist.action'
function* handleGetArtistList() {
    while(true) {
        try {
            const {payload} = yield take(artistActions.GET_ARTIST_LIST)
            const {data} = yield call(artistService.getArtistList, payload)
            yield put(artistActions.getArtistListDone(data))
        } catch (err) {
            fork(handleArtistErr, err)
        }
    }
}
function* handleArtistErr(err) {
    yield call(artistService.showMessage, 'error', err)
}
export default function* artistSaga() {
    yield all([
        fork(handleGetArtistList)
    ])
}