import React from 'react'

const loginClient = () => {

  return (
    <div className='bg-white min-vh-100'>1
      <h1 className='text-center'>Welcome Back</h1>
      <p className='text-center'>Enter your email and password to access your account</p>
         <div className='container' style={{ width: '470px', height: '550px', background: 'rgba(118, 118, 118, 0.46)', borderRadius: '16px' }}>


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

            <br /><br />
        <button className='w-100 h-60'>Log in</button>
        </div>


    </div>
  )
}
export default loginClient