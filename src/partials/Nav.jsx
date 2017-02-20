import React from 'react'
import {IndexLink} from 'react-router'

export default (props) => {
  let nav = null
  const auth = props.auth
  const navProps = props.nav
  if (auth.loggedIn()) {
    nav = <ul className='pure-menu-list'>
      <li key={navProps.home.id} className='pure-menu-item'>
        <IndexLink to='/' activeClassName='nav-active' className='pure-menu-link'>Home</IndexLink>
      </li>
      <li key={navProps.checkin.id} className='pure-menu-item'>
        <IndexLink to='/check-in' activeClassName='nav-active' className='pure-menu-link'>Check-in</IndexLink>
      </li>
      <li key={navProps.standup.id} className='pure-menu-item'>
        <IndexLink to='/stand-up' activeClassName='nav-active' className='pure-menu-link'>Standup</IndexLink>
      </li>
      <li key={navProps.logout.id} className='pure-menu-item'>
        <IndexLink activeClassName='nav-active' onClick={auth.logout.bind(this)}
                   className='pure-menu-link nav-logout'>Logout</IndexLink>
      </li>
    </ul>
  } else {
    nav = <ul className='pure-menu-list'>
      <li key={navProps.home.id} className='pure-menu-item'>
        <IndexLink to='/' activeClassName='nav-active' className='pure-menu-link'>Home</IndexLink>
      </li>
      <li key={navProps.login.id} className='pure-menu-item'>
        <IndexLink activeClassName='nav-active' onClick={auth.login.bind(this)} className='pure-menu-link nav-login'>Login /
          Register</IndexLink>
      </li>
    </ul>
  }
  return (
    <div className='header'>
      <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
        <a className='pure-menu-heading' href=''>Check-in</a>
        { nav }
      </div>
    </div>
  )
}
