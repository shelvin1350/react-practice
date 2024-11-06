import React from 'react'

function PropEx(props) {
  return (
    <div>
        
        <div className='container'>
            <h2>{props.products}</h2>
            <p>Price: ${props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    </div>
  )
}

export default PropEx