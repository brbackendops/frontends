import React , { useState } from 'react'

import './CreateForm.css'
import { animated , useSpring } from '@react-spring/web'


function CreateForm({ clicked , setClick }) {
  const [image,setImage] = useState('')
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [budget,setBudget] = useState('')
  const [active,setActive] = useState('')
  const [springs,api] = useSpring(() => ({
    from: { x: 0}
  }))

  function handleSubmit(e) {
    e.preventDefault();
    onSave("project")
  }
  
  const handleCancelClick = () => {
      api.start({
        from: {
          x:0
        },
        to: {
          x: 100
        }
      })
      setClick(!clicked)
  }

  return (
    <div className='main-f'>
        <form className='input-grp' onSubmit={handleSubmit}>
            <div class="img-body">
                <label htmlFor='upload-image'>
                    <img src="https://i.stack.imgur.com/R5LZz.png" alt="descriptor-img"/>
                    <input type='file' id="upload-image" name='image' style={{ display: "none"}} />
                </label>
            </div>

            <label htmlFor='name'>Project name</label>
            <input type='text' name='name' placeholder='enter name'/>

            <label htmlFor='description'>Project Description</label>      
            <textarea name='description' placeholder='enter description'></textarea>
            
            <label htmlFor='budget'>Project Budget</label>
            <input type='text' name='budget' placeholder='enter budget'/>

            <label htmlFor='isActive'>Active</label>
            <input type='checkbox' name='isActive'/>

            <div className='input-group'>
                <button className='primary bordered medium'>
                Create
                </button>
                <button className='primary bordered medium' onClick={handleCancelClick}>
                Cancel
                </button>                
            </div>
        </form>
    </div>
  )
}

export default CreateForm