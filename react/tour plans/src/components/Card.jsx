import React , { useState , useContext } from 'react'
import { cardList } from '../context/contextAPI';
import './Card.css'

function Card({ total , value , Mykey , completed }) {
    const { cards , push , updateArr } = useContext(cardList)
    const [ checked , setChecked ] = useState(false)

    function setChecks(){
        updateArr(Mykey,!checked);
        setChecked(!checked)
        console.log(cards[Mykey])
    }

    return (
        <div className="card" key={Mykey}>
            <input type='checkbox' value={checked} onChange={() => setChecks()}/>
            <span className="card-value">{total} - {value}</span>
            {
                checked ? <p>✅</p> : <p>❌</p>
            }
        </div>
    )
}

export default Card