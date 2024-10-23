import React from 'react'
import './CreateContact.css'

export default function CreateContact({ data , setData }) {
  const [ title , setTitle ] = React.useState('')
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: data.length + 1,
      name: title,
      image: "https://static.vecteezy.com/system/resources/previews/020/765/399/original/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"        
    }
    setData([...data , obj])
    setTitle('')
  }
  return (
    <div className='main-card'>
        <h1>Add a Contact</h1>
        <form className='f-form' onSubmit={handleSubmit}>
            <div className='f-title'>
                <label htmlFor='title'>Name</label>
                <input type='title' id='title' name='title' onChange={handleTitle} value={title}/>
                <button type='submit' className='f-btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

