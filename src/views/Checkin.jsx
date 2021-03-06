import React from 'react'
import Commits from './Commits'
import moment from 'moment'

export default class CheckinForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        date: moment(),
        commits: [],
        commitsWindow: false,
        selectedCommits: []
    }

    this.createFormattedDate = this.createFormattedDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.expandCommitsWindow = this.expandCommitsWindow.bind(this)
    this.collapseCommitsWindow = this.collapseCommitsWindow.bind(this)
    this.selectCommit= this.selectCommit.bind(this)
  }

  expandCommitsWindow() {
    this.setState({commitsWindow: true})
    const githubNickName = JSON.parse(localStorage.getItem('profile')).nickname
    const url = `https://api.github.com/users/${githubNickName}/events`

    this.props.route.fetchCommits(url)
      .then(commits => {
        this.setState({commits: commits.filter(commit => commit.payload.commits).slice(0, 5)})
      })
  }

  collapseCommitsWindow() {
    this.setState({commitsWindow: false})
  }

  selectCommit(e) {
    let selectedCommits = this.state.selectedCommits.slice()
    const commit = e.target.value
    selectedCommits.push(commit)
    this.setState({selectedCommits: selectedCommits})
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
      selectedCommits: this.state.selectedCommits
    }
    localStorage.setItem('checkin', JSON.stringify(checkin))
    localStorage.setItem('checkedin', JSON.stringify(true))
    window.location.href ='/stand-up'
  }

  render () {
    const commits = this.state.commitsWindow
    ? <div>
        <Commits className='checkin-commits' commits = {this.state.commits} selectCommit={this.selectCommit}/>
        <button onClick={this.collapseCommitsWindow} className='pure-button button-danger button-small remove-checkin-commits'>Cancel</button>
      </div>
    : <button className='pure-button button-small checkin-add-commits' onClick={this.expandCommitsWindow}>Add commits</button>

    return (
      <div className='pure-u-3-5'>
        <form className='pure-form pure-form-stacked'>
          <fieldset>
            <h2>Check-in to your meeting</h2>

            <label>Date</label>
            <input name='date' className='pure-input-1' placeholder={this.createFormattedDate()} disabled='true'/>

            <label>What did you do yesterday?</label>
            <textArea name='yesterday' className='pure-input-1' value={this.state.yesterday} onChange={this.handleChange} type='text' />

            {commits}

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
