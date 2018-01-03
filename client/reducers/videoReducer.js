import check_mark_hover from '../assets/arrow1@2x.png'
import check_mark from '../assets/arrow2@2x.png'
import { VIDEO_ADD_ACTIVE, } from '../actions/videoAction'
import {
    REQUEST_BANNER,
    REQUEST_PUSH_ON,
    RECEIVE_BANNER,
    RECEIVE_PUSH_ON,
    REQUEST_CUT,
    RECEIVE_CUT
} from '../actions/fetchAction'

function video(state = {
    check_mark_hover: check_mark_hover,
    check_mark: check_mark,
    bannerList: {
        isFetching: false,
        items: []
    },
    pushonList: {
        isFetching: false,
        items: []
    },
    cutList: {
        isFetching: false,
        items: []
    }
}, action) {
    let bannerList = {}, pushonList = {}, cutList = {}
    switch (action.type) {
        case REQUEST_BANNER:
            bannerList = {
                isFetching: true
            }
            return Object.assign({}, state, {
                bannerList: bannerList,
            })
        case REQUEST_PUSH_ON:
            pushonList = {
                isFetching: true
            }
            return Object.assign({}, state, {
                pushonList: pushonList
            })
        case REQUEST_CUT:
            cutList = {
                isFetching: true
            }
            return Object.assign({}, state, {
                cutList: cutList
            })
        case RECEIVE_BANNER:
            bannerList = {
                isFetching: false,
                items: action.items
            }
            return Object.assign({}, state, {
                bannerList: bannerList,
            })
        case RECEIVE_PUSH_ON:
            pushonList = {
                isFetching: false,
                items: action.items
            }
            return Object.assign({}, state, {
                pushonList: pushonList
            })
        case RECEIVE_CUT:
            cutList = {
                isFetching: false,
                items: action.items
            }
            return Object.assign({}, state, {
                cutList: cutList
            })
        default:
            return state
    }

}
export default video