import React, { useState } from 'react'
import './Update.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo , ToUpdated , setUpdateValue  } from '../../store/reducers/todo'

function Update() {

  const dispatch = useDispatch()
  const forUpdate = useSelector((store) => store.todos.text)
  const [utodo,setUtodo] = useState('')

  const handleUpdate = (e) => {
    setUtodo(e.target.value)
  }

  const handleUpdateSubmit = () => {

    dispatch(updateTodo({
        id: forUpdate.id,
        text: utodo,
        completed: forUpdate.completed
    }));

    dispatch(ToUpdated(false))
    dispatch(setUpdateValue(null))
    setUtodo('')
  }

  return (
    <div className='update-box'>
        <h2>Update!</h2>
        <div className='update-tool'>
            <input type='text' placeholder={forUpdate.text} onChange={handleUpdate} value={utodo}/>
            <input type='submit' value="Update" onClick={handleUpdateSubmit}/>
        </div>
    </div>
  )
}

export default Update