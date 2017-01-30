import React from 'react'
import Nav from './nav'

export default (props) =>
<div>
  <Nav />
  <div className='pure-g blue-background'>
    <div className='pure-u-1'>
      <div className='l-box'>
        {props.children}
      </div>
    </div>
  </div>
</div>

