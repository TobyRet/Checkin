import React from 'react'
import {IndexLink} from 'react-router'

export default () => {
  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href="">Check-in</a>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <IndexLink to='/' activeClassName='nav-active' className='pure-menu-link'>Home</IndexLink>
          </li>
          <li className="pure-menu-item">
            <IndexLink to='/check-in' activeClassName='nav-active' className='pure-menu-link'>Check-in</IndexLink>
          </li>
          <li className="pure-menu-item">
            <IndexLink to='/stand-up' activeClassName='nav-active' className='pure-menu-link'>Standup</IndexLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
