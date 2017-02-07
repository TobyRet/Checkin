import React from 'react'

export default class Standup extends React.Component {
  constructor(props) {
    super(props)
    this.openReportWindow = this.openReportWindow.bind(this)
    this.closeReportWindow = this.closeReportWindow.bind(this)
    this.state = {
      reportWindow: false
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
          <ul>
            <li>
              <div>
                <p>9.00am</p>
                <p>Toby has checked in!</p>
                {report}
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
