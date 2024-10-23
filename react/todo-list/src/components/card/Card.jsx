import React from 'react'
import { MdDelete } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { deleteTodo , setUpdateValue , ToUpdated } from '../../store/reducers/todo';
import './Card.css'

function Card({ todo }) {

  const dispatch = useDispatch()

  const deleteTodoHandler = () => {
    dispatch(deleteTodo({ id: todo.id}))
  }

  const handleUpdateHandler = () => {
    dispatch(setUpdateValue(todo))
    dispatch(ToUpdated(true))
  }

  return (
    <div className='card-main'>
      <h2>{todo.text}</h2>
      <div className='card-settings'>
        <MdDelete className='card-del' onClick={deleteTodoHandler}/>
        <HiOutlineExternalLink className='card-update' onClick={handleUpdateHandler}/>
      </div>
    </div>
  )
}

export default Card