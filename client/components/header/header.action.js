export const ADD_ACTIVE = 'ADD_ACTIVE'
export function addActive(payload) {
    return {
        type:ADD_ACTIVE,
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

export const ERRORS = 'ERRORS'
export function errors(payload) {
    return {
        type:ERRORS,
        payload
    }
}