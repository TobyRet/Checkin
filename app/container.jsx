import React from 'react'
import Nav from './nav'
import Footer from './footer'

export default (props) =>
<div>
  <Nav />
  <div className='pure-g'>
    <div className='pure-u-1'>
      <div className='l-box'>
        {props.children}
      </div>
    </div>
  </div>
</div>

