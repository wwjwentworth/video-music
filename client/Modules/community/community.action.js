export const GET_COMMUNITY_DATA = 'GET_COMMUNITY_DATA'
export function getCommunityData(payload) {
    return{
        type:GET_COMMUNITY_DATA,
        payload
    }
}

export const GET_COMMUNITY_DATA_DONE = 'GET_COMMUNITY_DATA_DONE'
export function getCommunityDataDone(payload) {
    return{
        type:GET_COMMUNITY_DATA_DONE,
        payload
    }
}

export const THUMB_UP = 'THUMB_UP'
export function thumbUp(payload) {
    return{
        type:THUMB_UP,
        payload
    }
}

export const THUMB_UP_DONE = 'THUMB_UP_DONE'
export function thumbUpDone(payload) {
    return{
        type:THUMB_UP_DONE,
        payload
    }
}

export const COMMENT = 'COMMENT'
export function comment( community) {
    return{
        type:COMMENT,
        community
    }
}

export const COMMENT_DONE = 'COMMENT_DONE'
export function commentDone(payload) {
    return{
        type:COMMENT_DONE,
        payload
    }
}