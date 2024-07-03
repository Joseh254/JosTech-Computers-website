import React from 'react'
import contact from "../assets/contactus.jpeg"
import { FaPhone } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import help from "../assets/help.png"
import { MdHelp } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

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

   </>
  )
}

export default Contact