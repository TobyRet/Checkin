import React from 'react'
import {Route} from 'react-router'

import mainRoutes from './views/routes'
const main = mainRoutes()

export const routes = () => {
  return (
    <Route path=''>
      {main}
    </Route>
  )
}

export default routes
