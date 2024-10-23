import React from 'react'
import questions from '../../data'
import Card from '../Card'
import './CardList.css'

function CardList() {
  return (
    <div className='list'>
        {
          questions.map((q) => (
            <Card id={q.id} question={q.question} answer={q.answer} key={q.id}/>
          ))
        }
    </div>
  )
}

export default CardList