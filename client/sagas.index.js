import { all } from 'redux-saga/effects'
import homeSaga from './Modules/home/home.saga'

export default function* rootSaga() {
    yield all([
        homeSaga
    ])
}