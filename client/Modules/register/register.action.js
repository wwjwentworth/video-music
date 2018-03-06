export const  REGISTER = 'REGISTER'
export function register(payload){
    return {
        type:REGISTER,
        payload
    }
}