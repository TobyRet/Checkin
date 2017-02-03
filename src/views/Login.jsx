import React from 'react'

export class Login extends React.Component {
  render() {
    console.log(this.props)
    const auth = this.props.auth

    return (
      <div>
        <h2>Login</h2>
        <button className='pure-button pure-button-primary' onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login
