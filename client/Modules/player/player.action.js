export const PLAY_SONG = 'PLAY_SONG'
export function playSong(payload) {
    return {
        type:PLAY_SONG,
        payload
    }
}

export const PLAY_SONG_DONE = 'PLAY_SONG_DONE'
export function playSongDone(payload) {
    return {
        type:PLAY_SONG_DONE,
        payload
    }
}

export const ADD_SONG = 'ADD_SONG'
export function addSong(payload) {
    return {
        type:ADD_SONG,
        payload
    }
}

export const ADD_SONG_DONE = 'ADD_SONG_DONE'
export function addSongDone(payload) {
    return {
        type:ADD_SONG_DONE,
        payload
    }
}