import React from 'react'
import './Card.css'

function Card({ id , question , answer}) {
  const [qId , setId] = React.useState(0)
  const handleClick = (questionId) => {
      if ( id == questionId ) {
        setId(id)
      }
  }
  return (
    <div className={ qId === id ? 'active': 'card' } 
      onMouseEnter={() => handleClick(id)}
      onMouseLeave = { () => setId(0)}
      >
      {
        qId === id ? (
          <p>{answer}</p>
        ): (
          <p>{question}</p>
        )
      }
    </div>
  )
}

export default Card