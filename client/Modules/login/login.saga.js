import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'

import * as loginActions from './login.action'
import * as loginService from './login.server'
function* handleLoginRequest() {
    while(true) {
        const {payload, promiseFn} = yield take(loginActions.LOGIN_REQUEST)
        try {
            const {data} = yield call(loginService.loginRequest, payload)
            yield put(loginActions.loginSuccess(data))
            if(data.errors) {
                yield call(promiseFn.reject, data.errors)
            } else {
                yield call(promiseFn.resolve, data[0])
            }
            
        } catch (err) {
            fork(handleLoginErr, err)
        }
    }
}
function* handleLoginErr(err) {
    yield call(loginService.showMessage, 'error', err)
}
export default function* loginSaga() {
    yield all([
        fork(handleLoginRequest)
    ])
}