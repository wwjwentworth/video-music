import { all } from 'redux-saga/effects'
import homeSaga from './Modules/home/home.saga'
import videoSaga from './Modules/video/video.saga'
export default function* rootSaga() {
    yield all([
        homeSaga(),
        videoSaga()
    ])
}