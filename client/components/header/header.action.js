export const CHANGE_PAGE = 'CHANGE_PAGE'
export function changePage(payload) {
    return {
        type:CHANGE_PAGE,
        payload
    }
}
export const CHANGE_PAGE_DONE = 'CHANGE_PAGE_DONE'
export function changePageDone(payload) {
    return {
        type:CHANGE_PAGE_DONE,
        payload
    }
}
export const REFRESH = 'REFRESH'
export function refresh(href) {
    return {
        type:REFRESH,
        href
    }
}

export const SET_USER = 'SET_USER'
export function setUser() {
    return {
        type:SET_USER
    }
}
export const REMOVE_COOKIE = 'REMOVE_COOKIE'
export function removeCookie() {
    return {
        type:REMOVE_COOKIE
    }
}