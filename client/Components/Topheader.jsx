import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../src/assets/logo.jpeg"
import "./Topheader.css"

function Topheader() {
  return (
    <section className='topheader'>

        
<div className="top_nav">
<img src={logo} alt="logo" />


<div className="topleftbtn">
    <button className="btnleft" >All</button>
    <input type="text" className="searchinput" id="searchinput" placeholder="Search"/>
    <button className="btnright">Search</button>

</div>

        <section className="signcart">

            <div className="sign">
                <div className="signinicon">

                <p>{<VscAccount />}</p>
                </div>
                <div className="signin">
                    <p>sign in</p>
                    <h4>Account</h4>
                </div>
                

            </div>

            <div className="cart">

                <h1>{< FiShoppingCart />}</h1>
                <div>
                <p>My</p>
                <h4>Cart</h4>
                </div>
            </div>

        </section>

</div>
    </section>
  )
}

export default Topheader