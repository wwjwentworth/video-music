import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as registerService from './register.service'
import * as registerActions from './register.action'
function* handleRegister() {
    while(true) {
        const {payload, promiseFn} = yield take(registerActions.REGISTER)
        try {
            const {data} = yield call(registerService.register, payload)
            if(data.errors) {
                yield call(promiseFn.reject, data.errors)
            } else {
                yield call(promiseFn.resolve)
            }
            
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
    ])
}