import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Nav from '../src/partials/nav'


describe('<Nav />', () => {
  let wrapper
  let auth = {
    login: () => {},
    logout: () => {}
  }

  const navIds = {
    home: 1,
    checkin: 2,
    login: 3,
    logout: 4,
    standup: 5
  }

  describe('Logged in', () => {
    beforeEach(() => {
      auth.loggedIn = () => {return true}
      wrapper = shallow(<Nav auth={auth} nav={navIds}/>)
    })

    it('should contain a list of nav elements', () => {
      expect(wrapper.find('ul')).to.have.length(1)
    })

    it('should contain a link to log out', () => {
      expect(wrapper.find('.nav-logout')).to.have.length(1)
    })
  })

  describe('Logged out', () => {
    beforeEach(() => {
      auth.loggedIn = () => {}
      wrapper = shallow(<Nav auth={auth} nav={navIds}/>)
    })

    it('should contain a list of nav elements', () => {
      expect(wrapper.find('ul')).to.have.length(1)
    })

    it('should contain a link to log in', () => {
      expect(wrapper.find('.nav-login')).to.have.length(1)
    })

  })
})
