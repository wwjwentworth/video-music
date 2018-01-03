import {combineReducers } from 'redux'
import header from '../reducers/headerReducer'
import home from '../reducers/homeReducer'
import carousel from '../reducers/carouselReduver'
import video from '../reducers/videoReducer'
import audio from '../reducers/audioReducer'
const rootReducer = combineReducers({
    header,
    home,
    carousel,
    video,
    audio
})
export default rootReducer