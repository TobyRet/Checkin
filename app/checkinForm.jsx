import React from 'react'

export default class CheckinForm extends React.Component {

  render () {
    return (
      <div className='pure-u-6-24'>
        <form className="pure-form pure-form-stacked">
          <label htmlFor="email">Date</label>
          <input id="email" type="date" />
          <label htmlFor="email">Yesterday</label>
          <input id="email" type="text" />
          <label htmlFor="email">Today</label>
          <input id="email" type="text" />
          <label htmlFor="email">Questions/Blockers</label>
          <input id="email" type="text" />
          <button type="submit" className="pure-button pure-button-primary">Check-in</button>
        </form>
      </div>
    )
  }
}
