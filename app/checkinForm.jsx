import React from 'react'

export default class CheckinForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: '',
      yesterday: '',
      today: '',
      questions: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }



  render () {
    return (
      <div className='pure-u-6-24'>
        <form className='pure-form pure-form-stacked'>
          <label>Date</label>
          <input name='date' value={this.state.date} onChange={this.handleChange} type='date' />
          <label>Yesterday</label>
          <input name='yesterday' value={this.state.yesterday} onChange={this.handleChange} type='text' />
          <label>Today</label>
          <input name='today' value={this.state.today} onChange={this.handleChange} type='text' />
          <label>Questions / Blockers</label>
          <input name='questions' value={this.state.questions} onChange={this.handleChange} type='text' />
          <button onClick={this.handleSubmit} className='pure-button pure-button-primary'>Check-in</button>
        </form>
      </div>
    )
  }
}
