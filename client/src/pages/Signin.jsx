import React from 'react'
import { Link } from 'react-router-dom'
import "./Signin.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios'

function Signin() {

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false)

  const handleSubmit = async (values)=>{
    try {
      setloading(true);
      const createUser = await axios.post("http://localhost:3000/api/users/register", {
          firstName: values.firstname,
          lastName:values.lastname,
          email:values.email,
          password:values.password
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
      console.log(createUser);
      setloading(false);
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
     
    },
    onSubmit: handleSubmit,
    validate: function(formvalues){
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
              type="email" 
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

        

          <button type='submit' className='createaccountbtn' disabled={loading}>
            {loading ? 'Please wait...' : "Submit"}
          </button>

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

export default Signin;
