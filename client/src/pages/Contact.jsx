import React from "react";
import contact from "../assets/contactus.jpeg";
import { FaPhone } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import help from "../assets/help.png";
import { MdHelp } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";

import "./Contact.css";

function handleClose() {
  const close = document.getElementById("needhelp");
  close.style.display = "none";
}

function Contact() {
  const [loading, setloading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      location: "",
      phone: "",
      subject: "",
      textarea: "",
    },
    onSubmit: function (formstate) {
      console.log(formstate);
    },
    validate: function (formvalues) {
      let errors = {};

      if (formvalues.firstname === "")
        errors.firstname = "first name is required";
      else if (firstname.length < 3)
        errors.fistname = "Firstname Must be Above Three Characters";

      if (formvalues.lastname === "") errors.lastname = "last name is required";

      if (formvalues.email === "") errors.email = "email is required";

      if (formvalues.location === "") errors.location = "location is required";

      if (formvalues.phone === "") errors.phone = "phone number is required";

      if (formvalues.subject === "")
        errors.subject = "please include a subject";

      if (formik.textarea === "") errors.textarea = "include a message";

      return errors;
    },
  });
  console.log(formik.values);
  return (
    <>
      <section className="contactuswrapper">
        <div className="contactheader">
          <h1>Get In Tourch</h1>
          <p>
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us...
          </p>
        </div>

        <div className="contactimg">
          <img src={contact} alt="" />
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
            <h3>Contact customer surpport</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
              quo!
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
          <h1>Contact surport</h1>
          <p>Have an Account? Sign in and we will be able to help out</p>
          <button>Sign in &rarr;</button>
          <Link to="/Help">Can't sign in or have a question?</Link>
          <Link to="/Help">Forgot your password?</Link>
          <Link to="/Help">Can't Access your Cart?</Link>
          <Link to="/Help">Add a recovery Email Adress?</Link>
          <Link to="/Help">Purchase Products</Link>
          <Link to="/contactheader">Exchange Item?</Link>
        </div>

        <div className="fillform">
          <form onSubmit={formik.handleSubmit}>
            <h1>We'd love to hear from you!</h1>
            <h1>Let's get in touch</h1>

            <div className="forminputss">
              <div className="inputs1">
                <label htmlFor=""> First Name</label>
                <input
                  type="text"
                  placeholder="first name eg john"
                  name="firstname"
                  value={formik.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <p> {formik.errors.firstname} </p>
                )}
              </div>

              <div className="inputs1">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="last name eg doe"
                  name="lastname"
                  value={formik.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <p>{formik.errors.lastname}</p>
                )}
              </div>
            </div>

            <div className="forminputss">
              <div className="inputs1">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="email adress eg johndoe@gmail.com"
                  name="email"
                  value={formik.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.email && formik.errors.email && (
                  <p>{formik.errors.email}</p>
                )}
              </div>

              <div className="inputs1">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  placeholder="your location eg Nairobi"
                  name="location"
                  value={formik.location}
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
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  placeholder="phone number eg 0712345678"
                  name="phone"
                  value={formik.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p>{formik.errors.phone}</p>
                )}
              </div>

              <div className="inputs1">
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  value={formik.subject}
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
                name="textarea"
                id=""
                placeholder="insert your message here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              >
                {formik.touched.textarea && formik.errors.textarea && (
                  <p>{formik.errors.textarea}</p>
                )}
              </textarea>

              <button type="submit">Send message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
