import React from 'react'
import CheckinService from '../utils/CheckinService'

export default class Standup extends React.Component {
  constructor(props) {
    super(props)
    this.openReportWindow = this.openReportWindow.bind(this)
    this.closeReportWindow = this.closeReportWindow.bind(this)
    this.state = {
      reportWindow: false,
      checkins: CheckinService.getCheckins()
    }
  }

  closeReportWindow(e) {
    e.preventDefault()
    this.setState({reportWindow: false})
  }

  openReportWindow(e) {
    e.preventDefault()
    this.setState({reportWindow: true})
  }

  render() {

    let report = this.state.reportWindow
      ? <div>
          <p>Yesterday: Did some stuff</p>
          <a href=''>Pullrequest: Some pull request</a>
          <p>Today: Will do some more stuff</p>
          <p>Questions: How do you do stuff?</p>
          <button onClick={this.closeReportWindow} className='pure-button pure-button-primary'>Close</button>
        </div>
      : <a href='' onClick={this.openReportWindow}>View report</a>

    return (
      <div className='standup-container'>
        <h1>14 Feb 2017</h1>
        <div>
          <ul className='standup-checkins'>
            <li>
              <div>
                <div className='standup-summary standup-avatar-container'>
                  <img src={JSON.parse(localStorage.profile).picture} className='pure-img standup-avatar' />
                </div>
                <div className='standup-summary'>
                  <h3>9.00am</h3>
                  <p>Toby has checked in!</p>
                  {report}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
