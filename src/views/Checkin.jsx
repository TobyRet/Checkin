import React from 'react'
import GithubClient from '../utils/GithubClient'
import Auth from '../utils/AuthService'
import moment from 'moment'

const auth = new Auth(__AUTH0_CLIENT_ID__,__AUTH0_DOMAIN__)


export default class CheckinForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        date: moment(),
        pullRequests: GithubClient.getPullRequests(),
        // commits: auth.fetch('https://api.github.com/users/tobyret/events'),
        pullRequestWindow: false
    }
    this.createFormattedDate = this.createFormattedDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.expandPullRequestWindow = this.expandPullRequestWindow.bind(this)
    this.collapsePullRequestWindow = this.collapsePullRequestWindow.bind(this)
    this.selectPullRequest = this.selectPullRequest.bind(this)
  }

  expandPullRequestWindow(e) {
    e.preventDefault()
    this.setState({pullRequestWindow: true})
  }

  collapsePullRequestWindow(e) {
    e.preventDefault()
    this.setState({pullRequestWindow: false})
  }

  selectPullRequest(e) {
    let selectedPullRequests = this.state.selectedPullRequests.slice()
    const pullRequest = this.state.pullRequests.filter(pr => e.target.id === pr['id'])
    selectedPullRequests.push(pullRequest)
    this.setState({selectedPullRequests: selectedPullRequests})
  }

  createFormattedDate() {
    return this.state.date.format('h:mma - MMMM Do YYYY')
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const checkin = {
      date: this.state.date,
      yesterday:this.state.yesterday,
      today: this.state.today,
      questions: this.state.questions,
      selectedPullRequests: this.state.selectedPullRequests
    }
    localStorage.setItem('checkin', JSON.stringify(checkin))
    window.location.href ='/#/stand-up'
  }

  render () {
    const pullRequests = this.state.pullRequestWindow
    ? <div>
      <label>Pull Requests</label>
        {this.state.pullRequests.map(pr => {
          return (
            <div key={pr['id']}>
              <input type="checkbox" onClick={this.selectPullRequest} />  {pr['title']}
            </div>
          )
        })}
        <button onClick={this.collapsePullRequestWindow} className='pure-button button-danger button-small'>Cancel</button>
      </div>
    : <button className='pure-button button-small' onClick={this.expandPullRequestWindow}>Add pull requests</button>

    return (
      <div className='pure-u-3-5'>
        <form className='pure-form pure-form-stacked'>
          <fieldset>
            <legend>Check-in to your meeting</legend>

            <label>Date</label>
            <input name='date' className='pure-input-1' placeholder={this.createFormattedDate()} disabled='true'/>

            <label>What did you do yesterday?</label>
            <textArea name='yesterday' className='pure-input-1' value={this.state.yesterday} onChange={this.handleChange} type='text' />

            {pullRequests}

            <label>What will you do today?</label>
            <textarea name='today' className='pure-input-1' value={this.state.today} onChange={this.handleChange} type='text' />

            <label>List any questions or blockers</label>
            <textArea name='questions' className='pure-input-1' value={this.state.questions} onChange={this.handleChange} type='text' />

            <button onClick={this.handleSubmit} className='checkin-submit-btn pure-button button-xlarge pure-button-primary'>Check-in</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
