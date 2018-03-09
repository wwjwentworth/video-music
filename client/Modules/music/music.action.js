export const GET_MUSIC_LIST = 'GET_MUSIC_LIST'
export function getMusicList(limit, pagenum) {
    return {
        type:GET_MUSIC_LIST,
        limit,
        pagenum
    }
}

export const GET_MUSIC_LIST_DONE = 'GET_MUSIC_LIST_DONE'
export function getMusicListDone(payload) {
    return {
        type:GET_MUSIC_LIST_DONE,
        payload
    }
}

export const GET_MUSIC_DETAILS = 'GET_MUSIC_DETAILS'
export function getMusicDetails(payload) {
    return {
        type:GET_MUSIC_DETAILS,
        payload
    }
}

export const GET_MUSIC_DETAILS_DONE = 'GET_MUSIC_DETAILS_DONE'
export function getMusicDetailsDone(payload) {
    return {
        type:GET_MUSIC_DETAILS_DONE,
        payload
    }
}

export const SHARE_SONG = 'SHARE_SONG'
export function shareSong(payload) {
    return {
        type:SHARE_SONG,
        payload
    }
}