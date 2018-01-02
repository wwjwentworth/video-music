import qs from 'qs'
import path from 'path'
import Express from 'express'
import { fetchCounter } from './api/counter'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { CreateStore } from 'redux'
import { Provider } from 'react-redux'
import CounterReducer from '../client/reducers/Counter'
import App from '../client/containers/App/App'

const app = Express()
const port = 3000
app.use(handleRender)
function handleRender(req, res) {
    // 如果存在的话，从 request 读取 counter
    fetchCounter(apiResult => {
        // 如果存在的话，从 request 读取 counter
        const params = qs.parse(req.query)
        const counter = parseInt(params.counter) || apiResult || 0

        // 得到初始 state
        let preloadedState = { counter }

        // 创建新的 Redux store 实例
        const store = createStore(counterApp, preloadedState)

        // 把组件渲染成字符串
        const html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )

        // 从 Redux store 得到初始 state
        const finalState = store.getState()

        // 把渲染后的页面发给客户端
        res.send(renderFullPage(html, finalState))
    });

    function renderFullPage(html, preloadedState) {
        return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
    }
    app.listen(port);