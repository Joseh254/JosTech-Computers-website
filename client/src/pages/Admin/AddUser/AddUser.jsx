import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddUser.css";
import axios from "axios";
import toast from "react-simple-toasts";
import useUserStore from "../../../../store/userStore";
import { useFormik } from "formik";
import { api_url } from "../../../../utills/config";
function AddUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  async function handleSubmit(values) {
    if (user && user.role === "admin") {
      try {
        setLoading(true);
        setError("");
        const response = await axios.post(`${api_url}/api/users/register`, {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          role: values.role,
        });

        if (response.data.success) {
          toast("User Added", { theme: "success" });
          navigate("/AdminUsers");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/Page404");
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "admin",
    },
    onSubmit: handleSubmit,
    validate: (values) => {
      let errors = {};
      if (!values.firstName) errors.firstName = "First name is required";
      if (!values.lastName) errors.lastName = "Last name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      return errors;
    },
  });
  return (
    <>
      <div className="addusers">

      <section className="signinpage">
      <div className="signinform">
        <h1>Create An Account</h1>
        <p>
          Already have an Account?{" "}
          <Link to="/Login">Log in to your account</Link>
        </p>

        {error && <h1 className="error">{error}</h1>}

        <form onSubmit={formik.handleSubmit}>
          <div className="signininputs">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Your first name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p>{formik.errors.firstName}</p>
            )}
          </div>

          <div className="signininputs">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p>{formik.errors.lastName}</p>
            )}
          </div>

          <div className="signininputs">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Your email"
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

          <div className="signininputs">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>

          <button type="submit" className="createaccountbtn" disabled={loading}>
            {loading ? "Please wait..." : "Submit"}
          </button>
        </form>
      </div>

    </section>

      </div>
    </>
  );
}

export default AddUser;
