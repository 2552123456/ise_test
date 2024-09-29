import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderClient() {
  let nav = useNavigate()

  const onWelcomeClick = () => {
    nav("/");
  }
  const onHomeClick = () => {
    nav("/homeClient");
  }
  
  const onAdmin = () => {
    nav("/Admin");
  }
  const onlogin = () => {
    nav("/Login");
  }
  const onForgotPass = () => {
    nav("/forgotPass");
  }
  const onVerifyCode = () => {
    nav("/VerifyCode");
  }
  const onHomePage_new = () => {
    nav("/HomePage_new");
  }
  const onHomePage_old = () => {
    nav("/HomePage_old");
  }
  const onSignUp = () => {
    nav("/SignUp");
  }


  return (

    <div>
      <button onClick={onWelcomeClick}>welcome</button>
      <button onClick={onSignUp}>Sign Up</button>
      <button onClick={onlogin}>Login</button>
      <button onClick={onForgotPass}>Forgot Pass</button>
      <button onClick={onVerifyCode}>Verify Code</button>
      <button onClick={onHomePage_new}>HomePage new</button>
      <button onClick={onHomePage_old}>HomePage old</button>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onAdmin}>Admin</button>
    </div>
  )
}

export default HeaderClient