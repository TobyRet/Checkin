import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import CheckinForm from '../views/Checkin'
import Home from '../views/Home'
import NotFound from '../views/404'
import Login from '../views/Login'
import Standup from '../views/Standup'
import AuthService from '../utils/AuthService'
import Container from '../containers/Container'
import {fetchCommits} from '../utils/GithubService'

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__)

const requireAuth = (nextState, replace) => {
  if(!auth.loggedIn()) {
    replace({pathname: '/login'})
  }
}

const mainRoutes = () => {
  return(
    <Route path='/' component={Container} auth={auth}>
      <IndexRedirect to='/home' />
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login}/>
      <Route path='/check-in' fetchCommits={fetchCommits} component={CheckinForm} onEnter={requireAuth}/>
      <Route path='/stand-up' component={Standup} onEnter={requireAuth}/>
      <Route path='*' component={NotFound} />
    </Route>
  )
}

export default mainRoutes
