import {combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import header from '../reducers/headerReducer'
import home from '../reducers/homeReducer'
import carousel from '../reducers/carouselReduver'
import video from '../reducers/videoReducer'
import videoDetails from '../reducers/videoDetailsReducer'
import audio from '../reducers/audioReducer'
import login from '../reducers/loginReducer'
import register from '../reducers/registerReducer'
const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
    header,
    home,
    carousel,
    video,
    videoDetails,
    audio,
    login,
    register
})
export default function configStore(preloadeState) {
    return createStore(
        rootReducer,
        preloadeState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}