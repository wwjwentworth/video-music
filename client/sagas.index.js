import { all } from 'redux-saga/effects'
import headerSaga from './components/header/header.saga'
import videoSaga from './Modules/video/video.saga'
import musicSaga from './Modules/music/music.saga'
import playerSaga from './Modules/player/player.saga'
import ArtistSaga from './Modules/artist/artist.saga'
import registerSaga from './Modules/register/register.saga'
import loginSaga from './Modules/login/login.saga'
import communitySaga from './Modules/community/community.saga'
export default function* rootSaga() {
    yield all([
        headerSaga(),
        videoSaga(),
        musicSaga(),
        playerSaga(),
        ArtistSaga(),
        registerSaga(),
        loginSaga(),
        communitySaga()
    ])
}