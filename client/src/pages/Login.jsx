import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function Login() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      password: "",
    },

    onSubmit: function (formstate) {
      console.log(formstate);
    },
    validate: function (formvalues) {
      let errors = {};
      if (formvalues.firstname === "")
        errors.firstname = "firstname is requred";
      if (formvalues.email === "") errors.email = "Email is requred";

      if (formvalues.password === "")
        errors.password = "Please enter a password";
      return errors;
    },
  });
  return (
    <div className="loginpage">
      <form onSubmit={formik.handleSubmit}>
        <div className="login">
          <div className="logininputs">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="first name"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p>{formik.errors.firstname}</p>
            )}
          </div>

          <div className="logininputs">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="your email address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>

          <div className="logininputs">
            <label htmlFor="">Password</label>
            <input
              type="text"
              placeholder="your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <p>{formik.errors.password}</p>
            )}

            <p>
              Forgot your password? <Link to="">Reset Passord</Link>
            </p>
            <button>Log in</button>
            <p>
              <Link to="/Signin">Create Account</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
