import React from "react";
import contact from "../../assets/contactus.jpeg";
import { FaPhone } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import help from "../../assets/help.png";
import { MdHelp } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { api_url } from "../../../utills/config";
import "./Contact.css";

function handleClose() {
  const close = document.getElementById("needhelp");
  close.style.display = "none";
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      first_name: "", 
      last_name: "",
      email: "",
      location: "",
      phone_number: "", 
      subject: "",
      message: "",
    },
    onSubmit: handleSubmit,
    validate: function (values) {
      let errors = {};
  
      if (values.first_name === "") errors.first_name = "First name is required";
      if (values.last_name === "") errors.last_name = "Last name is required";
      if (values.email === "") errors.email = "Email is required";
      if (values.location === "") errors.location = "Location is required";
      if (values.phone_number === "") errors.phone_number = "Phone number is required"; 
      if (values.subject === "") errors.subject = "Please include a subject";
      if (values.message === "") errors.message = "Include a message"; 
      return errors;
    },
  });

  async function handleSubmit(values) {
    setLoading(true);
    try {
      const response = await axios.post(`${api_url}/api/users/writeMessages`, values);
      console.log(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <>
      <section className="contactuswrapper">
        <div className="contactheader">
          <h1>Get In Touch</h1>
          <p>
            Want to get in touch? We'd love to hear from you. Here's how you can reach us...
          </p>
        </div>

        <div className="contactimg">
          <img src={contact} alt={contact} />
        </div>
      </section>

      {/* ******************************************************** */}

      <section className="talking">
        <div className="talktous">
          <h1>
            <FaPhone />
          </h1>
          <h3>Talk to sales</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo!
          </p>
        </div>

        <div className="custommersurport">
          <div className="talktous">
            <h1>
              <LuMessagesSquare />
            </h1>
            <h3>Contact customer support</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo!
            </p>
          </div>
        </div>

        <div className="needhelp" id="needhelp">
          <div className="close">
            <button onClick={handleClose}>
              <IoMdClose />
            </button>
          </div>
          <img src={help} alt="Help" />
          <p>
            <MdHelp /> Need to get in Touch? I'm here to help you
          </p>
        </div>
      </section>

      <section className="contactsurport">
        <div className="surppotcontactlinks">
          <h1>Contact support</h1>
          <p>Have an Account? Sign in and we will be able to help out</p>
          <button>Sign in &rarr;</button>
          <Link to="/Help">Can't sign in or have a question?</Link>
          <Link to="/Help">Forgot your password?</Link>
          <Link to="/Help">Can't Access your Cart?</Link>
          <Link to="/Help">Add a recovery Email Address?</Link>
          <Link to="/Help">Purchase Products</Link>
          <Link to="/contactheader">Exchange Item?</Link>
        </div>

        <div className="fillform">
  <form onSubmit={formik.handleSubmit}>
    <h1>We'd love to hear from you!</h1>
    <h1>Let's get in touch</h1>

    <div className="forminputss">
      <div className="inputs1">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="First name e.g. John"
          name="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.first_name && formik.errors.first_name && (
          <p>{formik.errors.first_name}</p>
        )}
      </div>

      <div className="inputs1">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          placeholder="Last name e.g. Doe"
          name="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.last_name && formik.errors.last_name && (
          <p>{formik.errors.last_name}</p>
        )}
      </div>
    </div>

    <div className="forminputss">
      <div className="inputs1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email address e.g. johndoe@gmail.com"
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

      <div className="inputs1">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="Your location e.g. Nairobi"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.location && formik.errors.location && (
          <p>{formik.errors.location}</p>
        )}
      </div>
    </div>

    <div className="forminputss">
      <div className="inputs1">
        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="number"
          placeholder="Phone number e.g. 0712345678"
          name="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.phone_number && formik.errors.phone_number && (
          <p>{formik.errors.phone_number}</p>
        )}
      </div>

      <div className="inputs1">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.subject && formik.errors.subject && (
          <p>{formik.errors.subject}</p>
        )}
      </div>
    </div>

    <div className="forminputs">
      <textarea
        name="message"
        placeholder="Insert your message here"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      ></textarea>
      {formik.touched.message && formik.errors.message && (
        <p>{formik.errors.message}</p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send message"}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  </form>
</div>
      </section>
    </>
  );
}

export default Contact;
