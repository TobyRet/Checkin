import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Container from './container'
import CheckinForm from './checkinForm'
import Home from './home'
import NotFound from './notFound'
import Standup from './standup'

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/check-in' component={CheckinForm} />
          <Route path='/stand-up' component={Standup} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}
