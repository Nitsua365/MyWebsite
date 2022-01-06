import React from 'react'

const Jumbotron = ({ header, subMsg }) => {
  return (
    <div className='Jumbotron'>
      <h1>{header}</h1>

      <p>{subMsg}</p>
    </div>
  )
}

export default Jumbotron;
