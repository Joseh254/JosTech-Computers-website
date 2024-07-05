import React from 'react'
import { Link } from 'react-router-dom'
import "./Signin.css"
import google from "../assets/google.png"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookMessenger } from "react-icons/fa";

function Signin() {
  return (
    <>
    <div className='signinform'>
      <h1>Create An Account</h1>
      <p>Already have an Account?<Link to="/Login">Log in to your account</Link> </p>

      <form>
    <div className='signininputs'>
      <label>First Name</label>
      <input type="text" placeholder='your First name' />
    </div>

    <div className='signininputs'>
      <label>Last Name</label>
      <input type="text" placeholder='your last name' />
    </div>

    <div className='signininputs'>
      <label>Email Address</label>
      <input type="text" placeholder='Your email' />
    </div>

    <div className='signininputs'>
      <label>Password</label>
      <input type="text" placeholder='Create a strong password' />
    </div>

    <div className='signininputs'>
      <label>Confirm Password</label>
      <input type="text" placeholder='Confirm Your Password' />
    </div>


    <button>Create Acount</button>

    <div>
      <p>Or sign in with</p>

      <button className='googlesignin'><FcGoogle/> Google</button>

      <button className='googlesignin'><FaFacebookMessenger/></button>
    </div>

      </form>
    
    </div>


    <div>

    </div>

    </>
  )
}

export default Signin