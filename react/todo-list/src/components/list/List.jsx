import React from 'react'
import './List.css'
import Card from '../card'
import { useSelector } from 'react-redux'

function List() {

  const todos = useSelector((state) => state.todos.data)
  const needUpdate = useSelector((store) => store.todos.toBeUpdated)

  return (
    <div className='list-main' style={ needUpdate ? { filter:'blur(8px)', }:{}}>
      {
        todos.length <= 0 ? <p className="list-empty">todos are empty!!</p> : (
          todos.map((todo) => (
            <Card todo={todo} key={todo.id}/>
          ))
        )
      }
    </div>  
  )
}

export default List