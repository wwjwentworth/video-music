import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './stores/configStore'
import App from './containers/App/App'
const store = configStore()
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
