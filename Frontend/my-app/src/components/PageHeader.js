import React from 'react'

export default function PageHeader() {

  return (
    <div className='HeaderTab'>
      <h1 id='HeaderName'>Austin Blanchard</h1>
      <input type="button" name="Projects" className="Projects" title='Projects'/>
      <input type="button" name="Contact Me" className="Contact Me" title='Contact Me'/>
    </div>
  )
}
