import React , { useState } from 'react'
import "./ProjectForm.css"

function ProjectForm({ onSave , onCancel }) { 

  const [image,setImage] = useState('')
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [budget,setBudget] = useState('')
  const [active,setActive] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSave("project")
  }


  return (
    <form className='input-group vertical' onSubmit={handleSubmit}>
      <div className="img-body">
        <label htmlFor='upload-image'>
          <img src="https://i.stack.imgur.com/R5LZz.png" alt="descriptor-img"/>
          <input type='file' id="upload-image" name='image' style={{ display: "none",}}/>
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
          Save
        </button>
        <span></span>
        <button type="button" className='bordered medium' onClick={onCancel}>
          cancel
        </button>
      </div>
      
    </form>
  )
}

export default ProjectForm