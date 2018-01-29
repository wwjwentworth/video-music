import check_mark_hover from '../../assets/arrow1@2x.png'
import check_mark from '../../assets/arrow2@2x.png'
import * as videoAction from './video.action'

function video(state = {
    check_mark_hover: check_mark_hover,
    check_mark: check_mark,
    details: {
        isFetching: false,
        items: {}
    },
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
        case videoAction.REQUEST_BANNER:
            bannerList = {
                isFetching: true
            }
            return Object.assign({}, state, {
                bannerList: bannerList,
            })
        case videoAction.REQUEST_PUSH_ON:
            pushonList = {
                isFetching: true
            }
            return Object.assign({}, state, {
                pushonList: pushonList
            })
        case videoAction.REQUEST_CUT:
            cutList = {
                isFetching: true
            }
            return Object.assign({}, state, {
                cutList: cutList
            })
        case videoAction.RECEIVE_BANNER:
            bannerList = {
                isFetching: false,
                items: action.items
            }
            return Object.assign({}, state, {
                bannerList: bannerList,
            })
        case videoAction.RECEIVE_PUSH_ON:
            pushonList = {
                isFetching: false,
                items: action.items
            }
            return Object.assign({}, state, {
                pushonList: pushonList
            })
        case videoAction.RECEIVE_CUT:
            cutList = {
                isFetching: false,
                items: action.items
            }
            return Object.assign({}, state, {
                cutList: cutList
            })
        case videoAction.REQUEST_DETAILS:
            details = {
                isFetching: true
            }
            return Object.assign({}, state, {
                details: details,
            })
        case videoAction.RECEIVE_DETAILS:
            details = {
                isFetching: false,
                items: action.items
            }
            return Object.assign({}, state, {
                details: details
            })
        default:
            return state
    }

}
export default video