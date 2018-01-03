export const NOW_LOCAL = 'NOW_LOCAL'

export function changeNowLocal(now) {
    return {
        type:NOW_LOCAL,
        now
    }
}