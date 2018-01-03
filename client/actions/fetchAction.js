import fetch from 'cross-fetch'

export const REQUEST_BANNER = 'REQUEST_BANNER'
export const REQUEST_PUSH_ON = 'REQUEST_PUSH_ON'
export const RECEIVE_BANNER = 'RECEIVE_BANNER'
export const RECEIVE_PUSH_ON = 'RECEIVE_PUSH_ON'
export const REQUEST_CUT = 'REQUEST_CUT'
export const RECEIVE_CUT = 'RECEIVE_CUT'
export const REQUEST_DETAILS = 'REQUEST_DETAILS'
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS'
//请求videos页面的banner数据
function requestBanner(url) {
    return {
        type: REQUEST_BANNER,
        url
    }
}
function receiveBanner(url, json) {
    return {
        type: RECEIVE_BANNER,
        url,
        items: json
    }
}
export function fetchBannerList(url) {
    return (dispatch, getState) => {
        const items = getState().video.bannerList.items
        console.log(items)
        if (items.length === 0) {
            dispatch(requestBanner(url))
            return fetch(url).then(response => response.json())
                .then(json => dispatch(receiveBanner(url, json)))
        }
    }
}

//请求videos页面的pushon数据
function requestPushon(url) {
    return {
        type: REQUEST_PUSH_ON,
        url
    }
}
function receivePushon(url, json) {
    return {
        type: RECEIVE_PUSH_ON,
        url,
        items: json
    }
}
export function fetchPushonList(url) {
    return (dispatch, getState) => {
        const items = getState().video.pushonList.items
        if (items.length === 0) {
            dispatch(requestPushon(url))
            return fetch(url).then(response => response.json())
                .then(json => dispatch(receivePushon(url, json)))
        }
    }
}

//请求videos页面的混剪数cut据
function requestCut(url) {
    return {
        type: REQUEST_CUT,
        url
    }
}
function receiveCut(url, json) {
    return {
        type: RECEIVE_CUT,
        url,
        items: json
    }
}
export function fetchCutList(url) {
    return (dispatch, getState) => {
        const items = getState().video.cutList.items
        if (items.length === 0) {
            dispatch(requestCut(url))
            return fetch(url).then(response => response.json())
                .then(json => dispatch(receiveCut(url, json)))
        }
    }
}

//请求VIDEOS详情
function requestVideoDetails(url) {
    return {
        type: REQUEST_DETAILS,
        url
    }
}
function receiveVideoDetails(url, json) {
    return {
        type: RECEIVE_DETAILS,
        url,
        items: json
    }
}

export function fetchVideoDetails(url, id) {
   
    return (dispatch, getState) => {
        const items = getState().videoDetails.details.items
       
        if (Object.keys(items).length === 0) {
            dispatch(requestVideoDetails(url))
            console.log(222,items)
            return fetch(url, {
                method:'POST',
                body:JSON.stringify({
                    id:id
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }).then(response => response.json())
                .then(json => dispatch(receiveVideoDetails(url, json)))
        }
    }
}
