export const GET_ARTIST_LIST = 'GET_ARTIST_LIST'
export function getArtistList(payload) {
    return {
        type:GET_ARTIST_LIST,
        payload
    }
}
export const GET_ARTIST_LIST_DONE = 'GET_ARTIST_LIST_DONE'
export function getArtistListDone(payload) {
    return{
        type:GET_ARTIST_LIST_DONE,
        payload
    }
}