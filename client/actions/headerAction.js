export const ADD_ACTIVE = 'ADD_ACTIVE'
export const REFRESH = 'REFRESH'
export function addActive(index) {
    return {
        type:ADD_ACTIVE,
        index
    }
}
export function refresh(href) {
    return {
        type:REFRESH,
        href
    }
}