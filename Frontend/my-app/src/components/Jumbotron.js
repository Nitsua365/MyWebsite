import React from 'react'

const Jumbotron = ({ header, subMsg }) => {
  return (
    <div className='Jumbotron'>
      <h1 id="Jumbo-header">{header}</h1>

      <p id="Jumbo-SubMsg">{subMsg}</p>
    </div>
  )
}

export default Jumbotron;
