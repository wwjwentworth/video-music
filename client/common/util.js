export const specIndex = (i) => {
    if (i < 10) {
        return `0${i}`
    }
    return i
}
export const formatDuration = (ms) => {
    const duration = ms / 1000
    const min = parseInt(duration / 60, 10)
    const sec = parseInt(duration - (min * 60), 10)
    return `${specIndex(min)}:${specIndex(sec)}`
}