import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from 'redux-thunk'

// import './index.css'
import 'semantic-ui-css/semantic.min.css'

import rootReducer from './reducers'
import Router from './router/Router'

import * as serviceWorker from './serviceWorker';

const middleware = applyMiddleware(thunk, reduxPackMiddleware)

const store = createStore(
  rootReducer, // Combined reducers from ./reducers/index.js
  // compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  middleware
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
serviceWorker.unregister();
