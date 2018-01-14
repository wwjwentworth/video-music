import fetch from 'cross-fetch'
export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
export function requestRegister() {
    return {
        type: REQUEST_REGISTER,
    }
}
export function receiveRegister(json) {
    return{
        type:RECEIVE_REGISTER,
    }
}
export function fetchRegister(values) {
    return(dispatch) => {
        dispatch(requestRegister())
        return fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body:JSON.stringify(values)
        }).then(res => res.json())
        .then(data => dispatch(receiveRegister()))
    }
    
}