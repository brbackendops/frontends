import React from 'react'
import './Card.css'

function Card({ name , setName }) {
  return (
    <div className='card-box'>
        <h1 onClick={() => setName(name)}>{name}</h1>
    </div>
  )
}

export default Card