import React, { useState , useContext } from 'react'
import Select from './Select';
import { cardList } from '../context/contextAPI';
import './Form.css'


function Form( ) {

  const [total,setTotal] = useState(0);
  const [value,setValue] = useState('');
  const { cards , pushInto ,  } = useContext(cardList)

  function handleSubmit(){
    pushInto({ total: total , value:value , completed: false })
    setValue('')
  }

  return (
    <div className="form">
      <p>What do you need for your 📅 trip ?</p>
      <div className="content">
          <Select optionsCount={10} setTotal={setTotal}/>
          <div className="input-form">
            <input type="input" placeholder='Add The item' value={value} onChange={(e) => setValue(e.target.value)}/>
          </div>
          <button type="submit" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  )
}

export default Form
