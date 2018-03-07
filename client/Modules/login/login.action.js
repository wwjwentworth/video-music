export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export function loginRequest(payload, promiseFn) {
    return {
        type:LOGIN_REQUEST,
        payload,
        promiseFn
    }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export function loginSuccess(payload) {
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}