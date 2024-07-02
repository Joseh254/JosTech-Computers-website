import React from 'react'

import manage from "../src/assets/manage.jpeg"
import order from "../src/assets/orders.jpeg"
import returns from "../src/assets/return.jpeg"
import membership from "../src/assets/membership.jpeg"
import "./Contactus.css"

function Contactus() {
  return (
    <>
    <h1>Help Center</h1>
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
        <p>Order Recipts</p>
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
        <p>My deals</p>
        <p>Managing payment methods</p>
        <p>updating profile</p>
    </div>

    </section>
    
    
    
    </>
  )
}

export default Contactus