import React from 'react'
import Nav from '../partials/Nav'

export class Container extends React.Component {
  render() {
    let children = null
    let auth

    if(this.props.children) {
      auth = this.props.route.auth
      children = React.cloneElement(this.props.children, {
        auth: auth
      })
    }

    return (
      <div>
        <Nav auth={auth}/>
        <div className='pure-g blue-background'>
          <div className='pure-u-1'>
            <div className='l-box'>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container

