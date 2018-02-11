import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './Router/Router'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render((
  <BrowserRouter>
    <Router routeprops={this.props} />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
