import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as videoService from './video.service'
import * as videoActions from './video.action'
function* handleGetBannerList() {
    while(true) {
        try {
            const {payload} = yield take(videoActions.GET_BANNER_LIST)
            const {data} = yield call(videoService.getBannerList)
            yield put(videoActions.getBannerListDone(data))
        } catch (err) {
            fork(handleVideoErr, err)
        }
    }
}

function* handleGetPushOnList() {
    while(true) {
        try {
            const {payload} = yield take(videoActions.GET_PUSHON_LIST)
            const {data} = yield call(videoService.getPushOnList)
            yield put(videoActions.getPushOnListDone(data))
        } catch (err) {
            fork(handleVideoErr, err)
        }
    }
}

function* handleGetCutList() {
    while(true) {
        try {
            const {payload} = yield take(videoActions.GET_CUT_LIST)
            const {data} = yield call(videoService.getCutList)
            yield put(videoActions.getCutListDone(data))
        } catch (err) {
            fork(handleVideoErr, err)
        }
    }
}

function* handleGetVideoDetails(){
    while(true) {
        try {
            const {payload} = yield take(videoActions.GET_VIDEO_DETAILS)
            const {data} = yield call(videoService.getVideoDetails, payload)
            console.log(data)
            yield put(videoActions.getVideoDetailsDone(data))
        } catch (err) {
            fork(handleVideoErr, err)
        }
    }
}

function* handleVideoErr(err) {
    yield call(videoService.showMessage, 'error', err)
}
export default function* videoSaga() {
    yield all([
      fork(handleGetBannerList),
      fork(handleGetPushOnList),
      fork(handleGetCutList),
      fork(handleGetVideoDetails)
    ])
}