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
    nav("/verifyCode");
  }
  const onHomePage_new = () => {
    nav("/homePage_new");
  }
  const onHomePage_old = () => {
    nav("/homePage_old");
  }
  const onChooseLevel = () => {
    nav("/chooseLevel");
  }
  const onInstructions = () => {
    nav("/instructions");
  }
  const onFirstTest = () => {
    nav("/firstTest");
  }
  const onSecondTest = () => {
    nav("/secondTest");
  }
  const onThirdTest = () => {
    nav("/thirdTest");
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
      <button onClick={onChooseLevel}>Choose level</button>
      <button onClick={onInstructions}>Instructions</button>
      <button onClick={onFirstTest}>First test</button>
      <button onClick={onSecondTest}>Second test</button>
      <button onClick={onThirdTest}>Third test</button>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onAdmin}>Admin</button>
    </div>
  )
}

export default HeaderClient