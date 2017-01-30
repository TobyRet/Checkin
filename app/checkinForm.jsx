import React from 'react'
import uuid from 'uuid'
import GithubClient from './githubClient'

export default class CheckinForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: '',
      yesterday: '',
      today: '',
      questions: '',
      pullRequests: GithubClient.getPullRequests(),
      pullRequestWindow: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.expandPullRequestWindow = this.expandPullRequestWindow.bind(this)
  }

  expandPullRequestWindow(e) {
    e.preventDefault()
    this.setState({pullRequestWindow: !this.state.pullRequestWindow})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const id = uuid.v4()
    localStorage.setItem(id, this.state)
  }

  render () {
    let pullRequests;

    if (this.state.pullRequestWindow) {
      pullRequests = <div className='pull-requests' onClick={this.expandPullRequestWindow} >
        <h3>Pull Requests</h3>
        {this.state.pullRequests.map(pr => {
          return(
            <label className="pure-checkbox">
              <input type="checkbox"/> <span><a href={pr['html_url']}>{pr['title']}</a></span>
            </label>
            )
        })}
      </div>
    } else {
      pullRequests = <a href="#" onClick={this.expandPullRequestWindow}>Add pull requests</a>
    }

    return (
      <div className='pure-u-6-24'>
        <form className='pure-form pure-form-stacked'>
          <label>Date</label>
          <input name='date' value={this.state.date} onChange={this.handleChange} type='date' />
          <label>Yesterday</label>
          <textArea name='yesterday' className='pure-input-1' value={this.state.yesterday} onChange={this.handleChange} type='text' />
          {pullRequests}
          <div className='pull-request-window'></div>
          <label>Today</label>
          <textarea name='today' className='pure-input-1' value={this.state.today} onChange={this.handleChange} type='text' />
          <label>Questions / Blockers</label>
          <textArea name='questions' className='pure-input-1' value={this.state.questions} onChange={this.handleChange} type='text' />
          <button onClick={this.handleSubmit} className='pure-button pure-button-primary'>Check-in</button>
        </form>
      </div>
    )
  }
}
