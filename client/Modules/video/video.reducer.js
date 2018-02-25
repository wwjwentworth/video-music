import check_mark_hover from '../../assets/arrow1@2x.png'
import check_mark from '../../assets/arrow2@2x.png'
import play_img from '../../assets/play.png'
import * as videoActions from './video.action'

export function video(state = {
    imgs:{
        check_mark_hover: check_mark_hover,
        check_mark: check_mark,
        play_img:play_img,
    },
    loading:false,
    bannerList:[],
    pushOnList:[],
    cutList:[],
    details:{}
}, action) {
    switch(action.type) {
        case videoActions.GET_BANNER_LIST:
            return{
                ...state,
                loading:true
            }
        case videoActions.GET_BANNER_LIST_DONE:
            return {
                ...state,
                bannerList:action.payload,
                loading:false
            }
        case videoActions.GET_PUSHON_LIST:
            return{
                ...state,
                loading:true
            }
        case videoActions.GET_PUSHON_LIST_DONE:
            return {
                ...state,
                pushOnList:action.payload,
                loading:false
            }
        case videoActions.GET_CUT_LIST:
            return {
                ...state,
                loading:true
            }
        case videoActions.GET_CUT_LIST_DONE:
            return{
                ...state,
                cutList:action.payload,
                loading:false
            }
        case videoActions.GET_VIDEO_DETAILS:
            return {
                ...state,
                loading:true
            }
        case videoActions.GET_VIDEO_DETAILS_DONE:
            return {
                ...state,
                details:action.payload,
                loading:false
            }
        default:
            return state
    }
}
