import React from 'react'
import {IndexLink} from 'react-router'

export default (props) => {
  let nav = null
  const auth = props.auth
  if (auth.loggedIn()) {
    nav = <ul className='pure-menu-list'>
      <li key='6' className='pure-menu-item'>
        <img className='pure-img nav-avatar' src={auth.getProfile().picture}/>
      </li>
      <li key='5' className='pure-menu-item'>
        <IndexLink to='/' className='pure-menu-link'>Hey {auth.getProfile().nickname}</IndexLink>
      </li>
      <li key='2' className='pure-menu-item'>
        <IndexLink to='/check-in' activeClassName='nav-active' className='pure-menu-link'>Check-in</IndexLink>
      </li>
      <li key='3' className='pure-menu-item'>
        <IndexLink to='/stand-up' activeClassName='nav-active' className='pure-menu-link'>Standup</IndexLink>
      </li>
      <li key='4' className='pure-menu-item'>
        <IndexLink activeClassName='nav-active' onClick={auth.logout.bind(this)}
                   className='pure-menu-link nav-logout'>Logout</IndexLink>
      </li>
    </ul>
  } else {
    nav = <ul className='pure-menu-list'>
      <li key='1' className='pure-menu-item'>
        <IndexLink to='/' activeClassName='nav-active' className='pure-menu-link'>Home</IndexLink>
      </li>
      <li key='2' className='pure-menu-item'>
        <IndexLink activeClassName='nav-active' onClick={auth.login.bind(this)} className='pure-menu-link nav-login'>Login /
          Register</IndexLink>
      </li>
    </ul>
  }
  return (
    <div className='header'>
      <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
        <a className='pure-menu-heading' href='/'>Check-in</a>
        { nav }
      </div>
    </div>
  )
}
