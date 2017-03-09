import AuthOLock from 'auth0-lock'
import {browserHistory} from 'react-router'

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new AuthOLock(clientId, domain, {
      auth: {
        redirectUrl: `${CHECKIN_HOST}:${PORT}/login`,
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
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if(error) {
        console.log('Error loading the Profile', error)
      } else {
        this.setProfile(profile)
      }
    })
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

  getProfile(){
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'Checkin'
    }

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers
    })
      .then(response => response.json())
      .then(json => Promise.resolve(console.log(json)))
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    window.location = '/'
  }
}
