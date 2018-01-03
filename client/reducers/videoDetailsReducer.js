import check_mark_hover from '../assets/arrow1@2x.png'
import check_mark from '../assets/arrow2@2x.png'
import { VIDEO_ADD_ACTIVE } from '../actions/videoAction'
import {
    REQUEST_DETAILS,
    RECEIVE_DETAILS,
} from '../actions/fetchAction'

function videoDetails(state = {
    details: {
        isFetching: false,
        items: {}
    }
}, action) {
    let details = {}
    switch (action.type) {
        case REQUEST_DETAILS:
            details = {
                isFetching: true
            }
            return Object.assign({}, state, {
                details: details,
            })
        case RECEIVE_DETAILS:
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
export default videoDetails