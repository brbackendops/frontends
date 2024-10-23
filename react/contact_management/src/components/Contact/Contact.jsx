import React from 'react'
import { EditIcon , DeleteIcon } from '../../icons'
import './Contact.css'


function Contact({ handleBeingEdited  , contact , setData , data }) {
  const [Entered , setEntered] = React.useState(false)

  const handleOnEnter = () => {
    setEntered(true)
  }

  const handleOnLeave = () => {
    setEntered(false)
  }

  const handleDelete = () => {
    console.log("pressed delete")
    setData(data.filter((data) => data.id != contact.id))
  }

  
  return (
    <div className='c-main' onMouseEnter={handleOnEnter} onMouseLeave={handleOnLeave}>
        { 
          Entered ? (
            <div className='c-icons'>
              <DeleteIcon className='del-icon' onClick={() => handleDelete()}/>
              <EditIcon className='e-icon' onClick={() => handleBeingEdited(contact)}/>
            </div>
          ): null
        }
        <div className='c-img'>
            <img src={contact.image}/>
        </div>
        <div className='c-name'>
            <p>{contact.name}</p>
        </div>
    </div>
  )
}

export default Contact