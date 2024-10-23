import React from 'react'
import './ContactEdit.css'
import { BackIcon , PhotoEdit } from '../../icons'

function ContactEdit({ contact , handleCancel }) {
  return (
    <div className='ce-main'>
        <div className='ce-icons'>
            <BackIcon className='b-icon' onClick={() => handleCancel()}/>
        </div>
        <div className='ce-img'>
            <label htmlFor='imgU'>
                <img src={contact.image}/>
                <PhotoEdit className='pe-icon'/>
            </label>
            <input type="file" id='imgU' style={{ visibility: 'hidden',}}/>
        </div>
        <div className='ce-name'>
            <input type='text' placeholder={contact.name}/>
        </div>
    </div>
  )
}

export default ContactEdit