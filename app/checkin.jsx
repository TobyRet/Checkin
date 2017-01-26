import React from 'react'
import Nav from './nav'
import Intro from './intro'
import CheckinForm from './checkinForm'

export default () => {
  return (
    <div className='pure-g'>
      <div className='pure-u-1'>
        <div className='l-box'>
          <Nav />
          <Intro />
          <CheckinForm />
        </div>
      </div>
    </div>
  )
}
