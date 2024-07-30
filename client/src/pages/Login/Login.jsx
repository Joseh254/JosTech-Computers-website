import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import userStore from "../../../store/userStore.js";
import { api_url } from "../../../utills/config";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const changeUserInformation = userStore((state) => state.changeUserInformation);

  async function handleSubmit(formState) {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(`${api_url}/api/users/login`, formState);
      const data = response.data;
      console.log(data.data)
      if (data.success) {
        changeUserInformation(data.data);
        if (data.data.role === 'admin') {
          navigate("/AdminHome");
        } else {
          navigate("/");
        }
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Please enter a password";
      return errors;
    },
  });

  return (
    <section className="loginsection">
      <div className="loginpage">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <h1>Log in to your account</h1>
            <div className="logininputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Your email address"
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.password && formik.errors.password && (
                <p className="loginerror">{formik.errors.password}</p>
              )}

              <p>
                Forgot your password? <Link to="/">Reset Password</Link>
              </p>
              {error && <p className="loginerror">{error}</p>}
              <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Log in"}
              </button>
              <p>
                <Link to="/Signin">Create Account</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
