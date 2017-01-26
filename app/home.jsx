import React from 'react'
import Nav from './nav'

export default () => {
  return (
    <div className='pure-g'>
      <div className='pure-u-1'>
        <div className='l-box'>
          <Nav />
          <div className="splash-container">
            <div className="splash">
              <h1 className="splash-head">Welcome to Check-in</h1>
              <p className="splash-subhead">
                Remote-friendly scrum checkins without the annoying meetings.
              </p>
              <p>
                <a href="/#/check-in" className="pure-button pure-button-primary">Check-in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
