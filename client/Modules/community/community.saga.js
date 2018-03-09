import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as communityService from './community.service'
import * as communityActions from './community.action'
const selectCommunityList = state => state.community.communityList

function* handleGetCommunityData() {
    while(true) {
        try {
            yield take(communityActions.GET_COMMUNITY_DATA)
            const {data} = yield call(communityService.getCommunityData, '')
            yield put(communityActions.getCommunityDataDone(data))
        } catch (err) {
            fork(handleCommunityErr, err)
        }
    }
}
function* handleThumbUp() {
    while(true) {
        try {
            const {payload} = yield take(communityActions.THUMB_UP)
            const communityList = yield select(selectCommunityList)
            communityList.map((community, index) =>{
                if(index === payload) {
                    community.like++;
                }
            })
            yield call(communityService.saveCommunityList, communityList)
            yield put(communityActions.thumbUpDone(communityList))
        } catch (err) {
            fork(handleCommunityErr, err)
        }
    }
}
function* handleCommunityErr(err) {
    yield call(communityService.showMessage, err)
}
export default function* communitySaga() {
    yield all([
        fork(handleGetCommunityData),
        fork(handleThumbUp)
    ])
}