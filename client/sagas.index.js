import { all } from 'redux-saga/effects'
import homeSaga from './Modules/home/home.saga'
import videoSaga from './Modules/video/video.saga'
import musicSaga from './Modules/music/music.saga'
import playerSaga from './Modules/player/player.saga'
import ArtistSaga from './Modules/artist/artist.saga'
export default function* rootSaga() {
    yield all([
        homeSaga(),
        videoSaga(),
        musicSaga(),
        playerSaga(),
        ArtistSaga()
    ])
}