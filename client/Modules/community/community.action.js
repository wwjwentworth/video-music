export const SHARE_SONG = 'SHARE_SONG'
export function shareSong(payload) {
    return{
        type:SHARE_SONG,
        payload
    }
}

export const SHARE_SONG_DONE = 'SHARE_SONG_DONE'
export function shareSongDone(payload) {
    return{
        type:SHARE_SONG_DONE,
        payload
    }
}