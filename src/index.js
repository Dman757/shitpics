import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from 'redux-thunk'

// import './index.css'
import 'semantic-ui-css/semantic.min.css'

import rootReducer from './reducers'
import Router from './Router/Router'

import registerServiceWorker from './registerServiceWorker'

const middleware = [ // Our full list of middleware organized, used below
  thunk,
  reduxPackMiddleware
]

const store = createStore(
  rootReducer, // Combined reducers from ./reducers/index.js
  applyMiddleware(...middleware)
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router routeprops={this.props} />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
