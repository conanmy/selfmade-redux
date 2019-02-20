import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import createStore from './myredux/createStore'
import Provider from './myredux/Provider'
import applyMiddleware from './myredux/applyMiddleware'
import loggerMiddleware from './myredux/loggerMiddleware'

function counterReducer(state, action) {
    if (state === undefined) {
        return { count: 0 };
    }
    if (action.type === 'increment') {
        return Object.assign(state, { count: state.count + 1})
    }
    if (action.type === 'decrement') {
        return Object.assign(state, { count: state.count - 1})
    }
}


ReactDOM.render(
    <Provider store={createStore(counterReducer, undefined, applyMiddleware(loggerMiddleware))}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
