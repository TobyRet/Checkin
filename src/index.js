import React from 'react'
import ReactDOM from 'react-dom'
import 'purecss'

import App from './containers/App'
import './styles/main.css'

import {browserHistory} from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes()

ReactDOM.render(
  <App history={browserHistory}
        routes={routes}/>,
    document.getElementById('app')
)
