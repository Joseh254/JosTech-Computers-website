import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='loginpage'>

<div className="login">

  <div className="logininputs">
    <label htmlFor="">First Name</label>
    <input type="text" placeholder='first name'/>
  </div>

  <div className="logininputs">
    <label htmlFor="">Email</label>
    <input type="text"  placeholder='your email address'/>
  </div>


  <div className="logininputs">
    <label htmlFor="">Password</label>
    <input type="text" placeholder='your password' />
    <p>Forgot your password? <Link to="">Reset Passord</Link></p>
    <button>Log in</button>
  </div>

  
</div>




    </div>
  )
}

export default Login