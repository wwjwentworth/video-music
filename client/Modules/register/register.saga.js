import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as registerService from './register.service'
import * as registerActions from './register.action'
function* handleRegister() {
    while(true) {
        try {
            const {payload} = yield take(registerActions.REGISTER)
            console.log(111)
            const t = yield call(registerService.register, payload)
            console.log(t)
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
        fork(handleRegister)
    ])
}