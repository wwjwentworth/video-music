export const  REGISTER = 'REGISTER'
export function register(payload){
    return {
        type:REGISTER,
        payload
    }
}

export const IS_REPEAT_NAME = 'IS_REPEAT_NAME'
export function isRepeatName(payload) {
    return {
        type:IS_REPEAT_NAME,
        payload
    }
}

export const IS_REPEAT_NAME_DONE = 'IS_REPEAT_NAME_DONE'
export function isRepeatNameDone(payload) {
    return {
        type:IS_REPEAT_NAME_DONE,
        payload
    }
}