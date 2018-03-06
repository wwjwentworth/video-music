import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as registerService from './register.service'
import * as registerActions from './register.action'
function* handleRegister() {
    while(true) {
        try {
            const {payload} = yield take(registerActions.REGISTER)
            yield call(registerService.register, payload)
        } catch (err) {
            fork(handleRegisterErr, err)
        }
    }
}

function* handleIspeatName() {
    while(true) {
        try {
            const {payload} = yield take(registerActions.IS_REPEAT_NAME)
            const {data} = yield call(registerService.isRepeatName, payload)
            yield put(registerActions.isRepeatNameDone(data))
        } catch (err) {
            fork(handleRegisterErr, err)
        }
    }
}
function* handleRegisterErr(err) {
    yield call(registerService.showMessage, 'error', err)
}
export default function* registerSaga() {
    yield all([
        fork(handleRegister),
        fork(handleIspeatName)
    ])
}