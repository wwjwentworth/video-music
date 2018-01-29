import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers.index'
import rootSaga from './sagas.index'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware,
        sagaMiddleware
    )
)

sagaMiddleware.run(rootSaga)

export default store