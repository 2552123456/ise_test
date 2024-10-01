import React from 'react'

function SignUpClient() {

  return (
    <div className='container signup-container card  mt-5'>
      <div className='card-body'>
       <h1 className='text-center'>SignUp</h1>
       <p className='m-1'>first name</p>
       <input type="text" className="form-control mb-3 " placeholder="First Name" />
       <p className='m-1'>last name</p>
       <input type="text" className="form-control mb-3 " placeholder="last name" />
       <p className='m-1'>email</p>
       <input type="email" className="form-control mb-3 " placeholder="email" />
       <p className='m-1'>password</p>
       <input type="password" className="form-control mb-3 " placeholder="password" />
       <div className="form-check">
      <input type="checkbox" className="form-check-input" id="acceptTerms" />
      <label className="form-check-label ms-2" htmlFor="acceptTerms">
        I accept the{' '}
        <button className="btn btn-link p-0" type="button">
          Terms of Use & Privacy Policy
        </button>
      </label>
    </div>
  <br />
  <br />
       <button type='submit' className='col-8 alert-link border-2 btn btn-outline-success '>sign up</button>
</div>
    </div>
  )
}

export default SignUpClient