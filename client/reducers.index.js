import {combineReducers} from 'redux'

import {home} from './Modules/home/home.reducer'
import {carousel} from './components/carousel/carousel.reducer'
import {audio} from './components/audio/audio.reducer'
import {header} from './components/header/header.reducer'
import {video} from './Modules/video/video.reducer'
import {music} from './Modules/music/music.reducer'
const rootReducer = combineReducers({
    home,
    carousel,
    audio,
    header,
    video,
    music
})

export default rootReducer