import React , { useState , useContext , useEffect } from 'react'
import { cardList } from '../context/contextAPI';
import './Footer.css';


function Footer() {
  const {cards,push,} = useContext(cardList);

  return (
    <div className="footer">
        <p>You have {cards.length} item on your list , and you already packed { cards.filter(val => val.completed !== false).length }  ( { ((cards.filter(val => val.completed !== false).length) / cards.length) * 100} % ) </p>
    </div>
  )
}

export default Footer