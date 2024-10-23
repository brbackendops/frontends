import React, { useEffect, useState } from 'react'
import Contact from '../Contact'
import ContactEdit from '../ContactEdit'
import './ListContact.css'

function ListContact({ data , setData }) {
  const [contactBeingEdited , setContactBeingEdited] = React.useState({})

  const handleBeingEdited = (contact) => {
    setContactBeingEdited(contact)
  }

  console.log("data",)

  

  const handleCancelEditing = () => {
    setContactBeingEdited({})
  }

  return (
    <div className="c-board" style={{ textAlign:'center'}}>
      {
       data.length <= 0  && <p style={{ fontSize:'30px', fontWeight: 'bolder' , fontSmooth:'smooth'}}>Contacts are empty ...!</p>
      }
      {
        data.length > 0 &&
          data.map((contact) => {
            return contact === contactBeingEdited ? <ContactEdit contact={contact} key={contact.id} handleCancel={handleCancelEditing}/> : <Contact contact={contact} data={data} setData={setData} handleBeingEdited={handleBeingEdited} key={contact.id}/>
          })          
      }
    </div>
  )
}

export default ListContact