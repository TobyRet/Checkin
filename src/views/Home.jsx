import React from 'react'

export default () => {
  return (
    <div className="splash-container">
      <div className="splash">
        <h1 className="splash-head">Welcome to Check-in</h1>
        <p className="splash-subhead">
          Remote-friendly scrum checkins without the annoying meetings.
        </p>
        <p>
          <a href="/check-in" className="pure-button pure-button-primary">Check-in</a>
        </p>
      </div>
    </div>
  )
}
