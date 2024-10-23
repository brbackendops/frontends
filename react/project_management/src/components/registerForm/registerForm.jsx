import React from 'react'
import "./registerForm.css"
function registerForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='r-body'>
      <p>Register</p>
      <form className='r-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='first name' name='first_name' required/>
        <input type='text' placeholder='last name' name='last_name' required/>
        <input type='email' placeholder='email' name='email' required/>
        <input type='number' placeholder='age' name='age'/>
        <input type='password' placeholder='password' name='password' required/>
        <button type='submit' style={{ width: '155px'}}>Create Account</button>
      </form>
    </div>
  )
}

export default registerForm