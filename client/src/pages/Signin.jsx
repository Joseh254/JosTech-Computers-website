import React from 'react'
import { Link } from 'react-router-dom'
import "./Signin.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useFormik } from 'formik';

function Signin() {

  const formik = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirm_password:""
    },
    onSubmit:function(formstate){
      console.log(formstate)
    },
    validate:function(formvalues){
      let errors = {};
      if(formvalues.firstname === "")
        errors.firstname = "First name is required";

      if(formvalues.lastname === "")
        errors.lastname = "Last name is required";

      if(formvalues.email === "")
        errors.email = "Email is required";

      if(formvalues.password === "")
        errors.password = "Password is required";
        
      if(formvalues.confirm_password === "")
        errors.confirm_password = "Please confirm your password";

      return errors; 
    }
  });

  console.log(formik.values);
  return (
    <section className='signinpage'>
      <div className='signinform'>
        <h1>Create An Account</h1>
        <p>Already have an Account?<Link to="/Login">Log in to your account</Link></p>

        <form onSubmit={formik.handleSubmit}>
          <div className='signininputs'>
            <label>First Name</label>
            <input 
              type="text" 
              placeholder='Your first name' 
              name='firstname' 
              value={formik.values.firstname} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              required
            />
            {formik.touched.firstname && formik.errors.firstname && <p>{formik.errors.firstname}</p>}
          </div>

          <div className='signininputs'>
            <label>Last Name</label>
            <input 
              type="text" 
              placeholder='Your last name' 
              name='lastname' 
              value={formik.values.lastname} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              required
            />
            {formik.touched.lastname && formik.errors.lastname && <p>{formik.errors.lastname}</p>}
          </div>

          <div className='signininputs'>
            <label>Email Address</label>
            <input 
              type="text" 
              placeholder='Your email' 
              name='email' 
              value={formik.values.email} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              required
            />
            {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
          </div>

          <div className='signininputs'>
            <label>Password</label>
            <input 
              type="password" 
              placeholder='Create a strong password' 
              name='password' 
              value={formik.values.password} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              required
            />
            {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
          </div>

          <div className='signininputs'>
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder='Confirm your password' 
              name='confirm_password' 
              value={formik.values.confirm_password} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              required
            />
            {formik.touched.confirm_password && formik.errors.confirm_password && <p>{formik.errors.confirm_password}</p>}
          </div>

          <button type='submit'>Create Account</button>

          <div className='alternativesignin'>
            <p>Or sign in with</p>

            <button className='googlesignin'><FcGoogle/> Google</button>
            <button className='googlesignin'><FaFacebookMessenger /> Messenger</button>
            <button className='googlesignin'><FaGithub/> Github</button>
          </div>
        </form>
      </div>

      <div className="signinimg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus amet iste sunt minus ut.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus amet iste sunt minus ut.</p>
        <button className='googlesignin'><FaFacebookMessenger /> Messenger</button>
        <button className='googlesignin'><FaGithub/> Github</button>
      </div>
    </section>
  )
}

export default Signin
