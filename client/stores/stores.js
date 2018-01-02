import {combineReducers } from 'redux'
import header from '../reducers/headerReducer'
import home from '../reducers/homeReducer'
const rootReducer = combineReducers({
    header,
    home
})
export default rootReducer