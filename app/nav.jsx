import React from 'react'

export default () => {
  return (
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href="">Check-in</a>

        <ul className="pure-menu-list">
          <li className="pure-menu-item pure-menu-selected"><a href="/" className="pure-menu-link">Home</a></li>
          <li className="pure-menu-item"><a href="/#/check-in" className="pure-menu-link">Check-in</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Stand-ups</a></li>
        </ul>
      </div>
    </div>
  )
}
