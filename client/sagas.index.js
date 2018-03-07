import { all } from 'redux-saga/effects'
import videoSaga from './Modules/video/video.saga'
import musicSaga from './Modules/music/music.saga'
import playerSaga from './Modules/player/player.saga'
import ArtistSaga from './Modules/artist/artist.saga'
import registerSaga from './Modules/register/register.saga'
import loginSaga from './Modules/login/login.saga'
export default function* rootSaga() {
    yield all([
        videoSaga(),
        musicSaga(),
        playerSaga(),
        ArtistSaga(),
        registerSaga(),
        loginSaga()
    ])
}