import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './Routes'
import NavBar from '../components/NavBar'

class Router extends Component {
  render () {
    return (
      <>
        <Route component={NavBar} />
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />))}
        </Switch>
      </>
    )
  }
}

export default Router
