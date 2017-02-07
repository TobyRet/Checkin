import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import App from '../app/containers/App'


describe('<App/>', () => {
  it('render', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).to.equal('Hello World!')
  })
})

