import React , { useState , useContext } from 'react'
import { cardList } from '../context/contextAPI';
import Card from './Card';
import './Board.css';

function Board() {
    const {pushInto , cards} = useContext(cardList)
    return (
        <div className="board">
            { 
                cards.length > 0 ? (
                    cards.map((card,index) => <Card total={card.total} value={card.value} Mykey={index} completed={card.completed}/>)
                ) : <></>
            }
        </div>
    )
}

export default Board