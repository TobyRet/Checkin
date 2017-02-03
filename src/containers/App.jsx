import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Container from './Container'
import CheckinForm from '../views/Checkin'
import Home from '../views/Home'
import NotFound from '../views/404'
import Standup from '../views/Standup'
import AuthService from '../utils/AuthService'

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__)

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/'})
    auth.login()
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container} auth={auth}>
          <IndexRoute component={Home}/>
          <Route path='/check-in' component={CheckinForm} onEnter={requireAuth}/>
          <Route path='/stand-up' component={Standup} onEnter={requireAuth}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}
