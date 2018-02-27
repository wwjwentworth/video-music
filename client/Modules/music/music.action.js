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