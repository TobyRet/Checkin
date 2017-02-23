import React from 'react'
import CheckinService from '../utils/CheckinService'
import moment from 'moment'
import ReactCountdownClock from 'react-countdown-clock'

export default class Standup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkins: CheckinService.getCheckins()
    }
  }

  report(checkin) {
    console.log(JSON.stringify(checkin))
    return checkin.checkin.reportWindow
      ?
      <div>
        <div className='standup-report'>
          <h3>My Report</h3>
          <h4>Yesterday</h4>
          <p>{checkin.checkin.yesterday}</p>
          <p><strong>Commits</strong></p>
          <ul>
            <li><a href=''>{checkin.checkin.selectedCommits[0]}</a></li>
            <li>< a href=''>{checkin.checkin.selectedCommits[1]}</a></li>
          </ul>
          <h4>Today</h4>
          <p>{checkin.checkin.today}</p>
          <h4>Questions / Blockers</h4>
          <p>{checkin.checkin.question}</p>
        </div>
        <button onClick={this.closeReportWindow.bind(this, checkin.profile.nickname)} className='pure-button pure-button-primary standup-report-close-btn'>Close</button>
      </div>

      : <a href='' onClick={this.openReportWindow.bind(this, checkin.profile.nickname)}>View report</a>
  }

  closeReportWindow(username, e) {
    e.preventDefault()

    const stateCopy = Object.assign([], this.state)
    const checkinsModified = stateCopy.checkins.map(checkin => {
      if(username === checkin.profile.nickname) {
        checkin.checkin.reportWindow = false
      }
      return checkin
    })

    this.setState({checkins: checkinsModified})
  }

  openReportWindow(username, e) {
    e.preventDefault()
    const stateCopy = Object.assign([], this.state)
    const checkinsModified = stateCopy.checkins.map(checkin => {
      if(username === checkin.profile.nickname) {
        checkin.checkin.reportWindow = true
      }
      return checkin
    })

    this.setState({checkins: checkinsModified})
  }

  render() {
    const renderedCheckins = this.state.checkins.map((checkin) =>
      <li key={checkin.profile.nickname} className='standup-checkin pure-u-1-2'>
          <div className='standup-avatar-container'>
            <img src={checkin.profile.picture} className='pure-img standup-avatar' />
          </div>
          <div className='standup-summary'>
            {checkin.checkin
              ? <div>
                  <h3>{moment(checkin.checkin.date).format('h:mma')}</h3>
                  <p><strong>{checkin.profile.nickname}</strong> has checked in!</p>
                  {this.report(checkin)}
                </div>
              : <div>
                <p><strong>{checkin.profile.nickname}</strong> has not checked in yet.</p>
                  <a href=''>Remind {checkin.profile.name}</a>
                </div>}
        </div>
      </li>
    )
    return (
      <div className='standup-container'>
        <h1>Avengers Team Standup</h1>
        <h2>14 Feb 2017</h2>
        <div>
          <ul className='standup-checkins'>
            {renderedCheckins}
          </ul>
        </div>
      </div>
    )
  }
}



