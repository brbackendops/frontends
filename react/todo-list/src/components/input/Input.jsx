import React, { useState } from 'react'
import './Input.css'
import { addTodo  } from '../../store/reducers/todo'
import { useDispatch } from 'react-redux'

function Input() {
  
  const dispatch = useDispatch()
  const [ todo , setTodo ] = useState('')

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      text: todo,
    }));
    setTodo('') 
  }

  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div className='form-main'>      
      <form onSubmit={HandleSubmit} className='form-in'>
          <input type='text' placeholder=' Add Todo' className='form-ctrl-in' onChange={handleInput} value={todo}/>
          <input type='submit' value="Add" className='form-ctrl-sbt'/>
      </form>
    </div>
  )
}

export default Input