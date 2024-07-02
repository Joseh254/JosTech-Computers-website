import React from 'react'

import manage from "../src/assets/manage.jpeg"
import order from "../src/assets/orders.jpeg"
import returns from "../src/assets/return.jpeg"
import membership from "../src/assets/membership.jpeg"
import { FaRegMessage } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import "./Helpus.css"

function Helpus() {
  return (

  <>
    <section className='helpcenter'>
    <h1 className='helpheading'>Help Center</h1>
   
    <section className='helpitems'>
    <div className="help">
    <div className="helpimg">
        <img src={manage} alt="" />
        <h2>Managing your account</h2>
        </div>
        <p>Reseting Password</p>
        <p>Managing payment methods</p>
        <p>updating profile</p>
    </div>


    <div className="help">
        <div className="helpimg">
        <img src={order} alt="" />
        <h2>Managing your Orders</h2>
        </div>
        <p>canceling Order</p>
        <p>Tracking Order</p>
        <p>Viewing Order History</p>
       
    </div>


    <div className="help">
    <div className="helpimg">
        <img src={returns} alt="" />
        <h2>Returns & Exchange</h2>
        </div>
        <p>Returning an item</p>
        <p>Returning a Damaged item</p>
        <p>viewing returned items</p>
    </div>



    <div className="help">
    <div className="helpimg">
        <img src={membership} alt="" />
        <h2>Membership & more</h2>
        </div>
        <p>My Deals</p>
        <p>viewing membership</p>
        <p>updating profile</p>
    </div>

    </section>
    
    
    
    </section>

    {/* ************************************************************************************** */}
<section className='bottomhelpwrapper'>
<div className="helptopics">
  <h1>Help Center Topics</h1>

  <select name="ManagingAccount" id="manage">
  <option value="manage">Managing account</option>
  <option value="manage">Manage account</option>
</select>

<select name="topic" id="manage">
  <option value="manangingorders">Manage Orders</option>
  <option value="manage">Manage Orders</option>
</select>


<select name="Returns" id="manage">
  <option value="returns">Returns & Exchange</option>
  <option value="returns">Returns & Exchannge</option>
</select>


<select name="topic" id="manage">
  <option value="membership">Membership</option>
  <option value="manage">Membership</option>
</select>

</div>
{/* ************************************************************************ */}
<div className='articles'>
  <input type="text " placeholder='Search In Help Center' />

  <h2>Recommended Articles</h2>

  
<select name="trackingorders" id="track">
  <option value="Tracking">Tracking an Order</option>
</select>

<select name="" id="">
<option value="returns">Return an Item</option>
</select>

<select name="returns" id="returns">
<option value="returns">Multiple Shipments</option>
</select>

<select name="" id="">
<option value="returns">My Account</option>
</select>
</div>

<div className="helpcontact">
  <h2>Need an Expert?</h2>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci veniam aperiam, molestias quidem id laborum incidunt dolores vitae eos alias in quam perspiciatis magni, eius maxime eum reiciendis? Exercitationem?
  <div className='messagehelp'>
    <div className="icontext">
    <h1><FaRegMessage/></h1>
    <p>Click to Chart With An Expert</p>
    </div>
    <p>Monday-Friday: 8Am-5Pm</p>
    <p>Sat: 8Am-1Pm</p>
  </div>


  <div className='messagehelp'>
    <div className="icontext">
    <h1><FaRegMessage/></h1>
    <p>Click to Call An Expert</p>
    </div>
    <p>Monday-Friday: 8Am-5Pm</p>
    <p>Sat: 8Am-1Pm</p>
  </div>

</div>

</section>

    </>
  )
}

export default Helpus;