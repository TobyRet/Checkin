import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Checkin from '../src/views/Checkin'

describe('<Checkin />', () => {
  const auth = {
    fetch: () => {}
  }
  const wrapper = shallow(<Checkin auth={auth} />)
})
