import React from 'react'
import googleLogo from '../assets/images/Google.png'

const loginClient = () => {

  return (
    <div className='bg-white min-vh-100'>
      <h1 className='text-center'>Welcome Back</h1>
      <p className='text-center'>Enter your email and password to access your account</p>
         <div className='container d-flex flex-column' style={{ width: '470px', height: '550px', background: 'rgba(118, 118, 118, 0.46)', borderRadius: '16px' }}>
                    <br />

          <p className='ms-1 pt-3 h4'>Email</p>
          <input type="email" className='form-control' placeholder='Enter your email' />
          <p className='ms-1 pt-3 h4'>Password</p>
          <input type="password" className='form-control' placeholder='Enter your password'/>
              <div className='d-flex justify-content-between align-items-center mt-3'>
                 <div>
        <input type="checkbox" className='form-check-input me-2' style={{cursor:"pointer"}} id='tick'/>
        <label htmlFor='tick' className='form-check-label' style={{cursor:"pointer"}}>Remember me</label>
                </div>
        <label className='text-right'><a href="#" className='text-decoration-none'>Forgot password?</a> </label>
             </div>

            <br /><br /><br /><br />
        <button className='btn bg-black w-100 h-60 text-white mb-2'>Log in</button>
        <button className='btn bg-black w-100 h-60 text-white'> <img src={googleLogo} alt="Google logo" className='me-2' style={{width:'25px', height:'25px' }} />Sign in with google</button>
      
        <p className='mt-auto text-center'>Don’t have an account?<a href="#" className='text-decoration-none'> sign up</a></p>
        </div>

        

        

    </div>
  )
}
export default loginClient