export const  REGISTER = 'REGISTER'
export function register(payload, promiseFn){
    return {
        type:REGISTER,
        payload,
        promiseFn
    }
}
