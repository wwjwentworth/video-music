export const GET_BANNER_LIST = 'GET_BANNER_LIST'
export function getBannerList(payload) {
    return{
        type:GET_BANNER_LIST,
        payload
    }
}

export const GET_BANNER_LIST_DONE = 'GET_BANNER_LIST_DONE'
export function getBannerListDone(payload) {
    return {
        type:GET_BANNER_LIST_DONE,
        payload
    }
}

export const GET_PUSHON_LIST = 'GET_PUSHON_LIST'
export function getPushOnList(payload) {
    return {
        type:GET_PUSHON_LIST,
        payload
    }
}

export const GET_PUSHON_LIST_DONE = 'GET_PUSHON_LIST_DONE'
export function getPushOnListDone(payload) {
    return {
        type:GET_PUSHON_LIST_DONE,
        payload
    }
}

export const GET_CUT_LIST = 'GET_CUT_LIST'
export function getCutList(payload) {
    return {
        type:GET_CUT_LIST,
        payload
    }
}
export const GET_CUT_LIST_DONE = 'GET_CUT_LIST_DONE'
export function getCutListDone(payload) {
    return{
        type:GET_CUT_LIST_DONE,
        payload
    }
}

export const GET_VIDEO_DETAILS = 'GET_VIDEO_DETAILS'
export function getVideoDetails(payload) {
    return{
        type:GET_VIDEO_DETAILS,
        payload
    }
}
export const GET_VIDEO_DETAILS_DONE = 'GET_VIDEO_DETAILS_DONE'
export function getVideoDetailsDone(payload) {
    return {
        type:GET_VIDEO_DETAILS_DONE,
        payload
    }
}