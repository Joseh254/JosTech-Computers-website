import React from 'react'
import contact from "../assets/contactus.jpeg"
import { FaPhone } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import help from "../assets/help.png"
import { MdHelp } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

import "./Contact.css"

  function handleClose() {
    const close = document.getElementById("needhelp");
    close.style.display = "none";
  }
function Contact() {
  return (
  <>
<section className='contactuswrapper'>

<div className="contactheader">
  <h1>Get In Tourch</h1>
  <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
</div>

<div className="contactimg">
  <img src={contact} alt="" />
</div>



</section>

{/* ******************************************************** */}

<section className='talking'>


  <div className="talktous">
    <h1><FaPhone/></h1>
    <h3>Talk to sales</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo!</p>
  </div>

    <div className='custommersurport'>
    <div className="talktous">
    <h1><LuMessagesSquare/></h1>
    <h3>Contact customer surpport</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo!</p>
  </div>
    </div>

    <div className='needhelp' id='needhelp'>
      <div className="close">
        <button onClick={handleClose}><IoMdClose /></button>
      </div>
      <img src={help} alt="Help" />
      <p><MdHelp /> Need to get in Touch? I'm here to help you</p>
    </div>


</section>




<section className='contactsurport'>

  <div className='surppotcontactlinks'>
    <h1>Contact surport</h1>
    <p>Have an Account? Sign in and we will be able to help out</p>
    <button>Sign in  &rarr;</button>
    <Link to="/Help">Can't sign in or have a question?</Link>
    <Link to="/Help">Forgot your password?</Link>
    <Link to="/Help">Can't Access your Cart?</Link>
    <Link to="/Help">Add a recovery Email Adress?</Link>
    <Link to="/Help">Purchase Products</Link>
    <Link to="/Help">Exchange Item?</Link>

  </div>

  <div className="fillform">
    <form action="">

      <h1>We'd love to hear from you!</h1>
      <h1>Let's get in touch</h1>



    <div className='forminputss'>
    <div className='inputs1'>
    <label htmlFor=""> First Name</label>
    <input type="text" placeholder='first name eg john' required />
    </div>

    <div className='inputs1'>
    <label htmlFor="">Last Name</label>
    <input type="text"  placeholder='last name eg doe' required/>
    </div>
    </div>




    <div className='forminputss'>
    <div className='inputs1'>
    <label htmlFor="">Email</label>
    <input type="text"  placeholder='email adress eg johndoe@gmail.com' required/>
    </div>

    <div className='inputs1'>
    <label htmlFor="">Location</label>
    <input type="text" placeholder='your location eg Nairobi' required />
    </div>
    </div>


    <div className='forminputss'>
    <div className='inputs1'>
    <label htmlFor="">Phone Number</label>
    <input type="text" placeholder='phone number eg 0712345678' required />
    </div>

    <div className='inputs1'>
    <label htmlFor="">Subject</label>
    <input type="text"  placeholder='subject' required/>
    </div>
    </div>
   


    <div className='forminputs'>
    <textarea name="" id="" placeholder='insert your message here' required>

</textarea>

<button>Send message</button>
    </div>
    </form>
  </div>
</section>

   </>
  )
}

export default Contact