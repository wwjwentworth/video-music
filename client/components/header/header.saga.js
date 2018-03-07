import { take, put, fork, call, all, select } from 'redux-saga/effects'
import * as headerActions from './header.action'
import * as headerService from './header.service'
const selectNav = state => state.header.nav
function* handleChangePage() {
    while (true) {
        try {
            const { payload } = yield take(headerActions.CHANGE_PAGE)
            let nav = yield select(selectNav)
            console.log(nav)
            nav.map(n => {
                n.active = false;
            })
            nav[payload].active = true
            yield put(headerActions.changePageDone(nav))
        } catch (err) {
            fork(handleHeaderErr, err)
        }
    }
}

function* handleHeaderErr(err) {
    yield call(headerService.showMessage, 'error', err)
}
export default function* headerSage() {
    yield all([
        fork(handleChangePage)
    ])
}