export const  REGISTER = 'REGISTER'
export function register(payload, promiseFn){
    return {
        type:REGISTER,
        payload,
        promiseFn
    }
}
export const  REGISTER_DONE = 'REGISTER_DONE'
export function registerDone(payload){
    return {
        type:REGISTER_DONE,
        payload,
    }
}
