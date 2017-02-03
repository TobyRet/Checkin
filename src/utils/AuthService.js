import AuthOLock from 'auth0-lock'
import {browserHistory} from 'react-router'

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new AuthOLock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:8080/login',
        responseType: 'token'
      }
    })

    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
    this.logout=this.logout.bind(this)
  }

  _doAuthentication(authResult) {
    this.setToken(authResult.idToken)
    browserHistory.replace('/')
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    return !!this.getToken()
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token')
    window.location = '/'
  }
}
