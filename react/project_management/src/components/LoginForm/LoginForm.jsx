import React, { useState } from 'react'
import "./LoginForm.css"

function LoginForm() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleEmail = (e) => {
      setEmail(e.target.value)
  }
  const handlePassword = (e) => {
      setPassword(e.target.value)    
  }

  return (
    <div className='l-body'>
      <p>Login</p>
      <form className='l-form'>
        <input type='email' placeholder='enter your email' name="email" value={email} onChange={handleEmail} required/>
        <input type='password' placeholder='enter your password' name="password" value={password} onChange={handlePassword} required/>
        <button type='submit'  style={{ width: '155px'}}>login</button>
      </form>
    </div>
  )
}

export default LoginForm