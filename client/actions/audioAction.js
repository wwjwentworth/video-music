export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export function play(index, duration) {
    return{
        type:PLAY,
        index,
        duration
    }
}
export function pause(index, duration) {
    return {
        type:PAUSE,
        index,
        duration
    }
}