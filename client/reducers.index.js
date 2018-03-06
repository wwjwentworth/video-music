import {combineReducers} from 'redux'

import {carousel} from './components/carousel/carousel.reducer'
import {header} from './components/header/header.reducer'
import {video} from './Modules/video/video.reducer'
import {music} from './Modules/music/music.reducer'
import {player} from './Modules/player/player.reducer'
import {artist} from './Modules/artist/artist.reducer'
const rootReducer = combineReducers({
    carousel,
    header,
    video,
    music,
    player,
    artist
})

export default rootReducer