import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Checkin from '../src/views/Checkin'

describe('<Checkin />', () => {
  const route = {
    fetchCommits: (url) => { return Promise.resolve({}) }
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Checkin route={route} />)
  })

  it('should display commits', () => {
    expect(wrapper.find('.checkin-add-commits')).to.have.length(1)
    wrapper.find('.checkin-add-commits').simulate('click')
    expect(wrapper.find('.checkin-commits')).to.have.length(1)
    wrapper.find('.remove-checkin-commits').simulate('click')
    expect(wrapper.find('.checkin-commits')).to.have.length(0)
  })
})
