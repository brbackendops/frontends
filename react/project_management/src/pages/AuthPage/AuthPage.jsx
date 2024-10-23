import React from 'react'
import LoginForm from "../../components/LoginForm"
import RegisterForm from "../../components/registerForm"
import "./AuthPage.css"

function AuthPage() {
  return (
    <div class="p-container">
      <div class="p-login">
        <LoginForm/>
      </div>
      <div class='middle'>
        <p>OR</p>
      </div>
      <div class="p-register">
        <RegisterForm/>
      </div>
    </div>
  )
}

export default AuthPage