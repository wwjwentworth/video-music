import { take, put, fork, call, select, cancel, all } from 'redux-saga/effects'
import * as playerActions from './player.action'
import * as playerService from './player.service'

const selectPlaylist = state => state.player.playlist
function isContain(id, playlist) {
    const len = playlist.length
    for (let i = 0; i < len; i += 1) {
        const song = playlist[i]
        if (song.id === id) {
            return true
        }
    }
    return false
}
function* handlePlaySong() {
    while (true) {
        try {
            const { payload } = yield take(playerActions.PLAY_SONG)
            const playlist = yield select(selectPlaylist)
            if (!isContain(payload.id, playlist)) {
                const { data: { data } } = yield call(playerService.playSong, payload.id)
                const { url } = data[0]
                if (url) {
                    const song = {
                        ...payload,
                        url
                    }
                    yield put(playerActions.playSongDone(song))
                }
            }
        } catch (err) {
            fork(handlePlayerErr, err)
        }
    }
}

function* handleAddSong() {
    while (true) {
        try {
            const { payload } = yield take(playerActions.ADD_SONG)
            const { data: { data } } = yield call(playerService.addSong, payload.id)

        } catch (err) {
            fork(handlePlayerErr, err)
        }
    }
}
function* handlePlayerErr(err) {
    yield call(videoService.showMessage, 'error', err)
}
export default function* playerSaga() {
    yield all([
        fork(handlePlaySong),
    ])
}