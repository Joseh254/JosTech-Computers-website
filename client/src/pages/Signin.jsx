import React from 'react';
import { Link } from 'react-router-dom';
import "./Signin.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookMessenger, FaGithub } from "react-icons/fa";
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';

function Signin() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/users/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: handleSubmit,
    validate: (values) => {
      let errors = {};
      if (!values.firstName) errors.firstName = "First name is required";
      if (!values.lastName) errors.lastName = "Last name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords must match";

      return errors;
    }
  });

  return (
    <section className='signinpage'>
      <div className='signinform'>
        <h1>Create An Account</h1>
        <p>Already have an Account? <Link to="/Login">Log in to your account</Link></p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={formik.handleSubmit}>
          <div className='signininputs'>
            <label>First Name</label>
            <input
              type="text"
              placeholder='Your first name'
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}
          </div>

          <div className='signininputs'>
            <label>Last Name</label>
            <input
              type="text"
              placeholder='Your last name'
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}
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

          <div className='signininputs'>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder='Confirm your password'
              name='confirmPassword'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <p>{formik.errors.confirmPassword}</p>}
          </div>

          <button type='submit' className='createaccountbtn' disabled={loading}>
            {loading ? 'Please wait...' : "Submit"}
          </button>

          <div className='alternativesignin'>
            <p>Or sign in with</p>
            <button className='googlesignin'><FcGoogle /> Google</button>
            <button className='googlesignin'><FaFacebookMessenger /> Messenger</button>
            <button className='googlesignin'><FaGithub /> Github</button>
          </div>
        </form>
      </div>

      <div className="signinimg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus amet iste sunt minus ut.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus amet iste sunt minus ut.</p>
        <button className='googlesignin'><FaFacebookMessenger /> Messenger</button>
        <button className='googlesignin'><FaGithub /> Github</button>
      </div>
    </section>
  );
}

export default Signin;
