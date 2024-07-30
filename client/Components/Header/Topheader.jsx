import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import "./Topheader.css";

function Topheader() {
  return (
    <header className="topheader">
      <div className="top_nav">
        <img
          src="https://res.cloudinary.com/dukptptve/image/upload/v1720545743/tsfefecdldflhhwttjwx.png"
          alt="logo"
        />
        <div className="topleftbtn">
          <button className="btnleft">All</button>
          <IoSearchSharp className="icon" />
          <input
            type="text"
            className="searchinput"
            id="searchinput"
            placeholder="Search..."
          />
          <button className="btnright">Search</button>
        </div>
        <section className="signcart">
          <div className="cart">
            <h1 className="headericons">
              <FiShoppingCart />
            </h1>
            <div>
              <button className="cartbtn">
                <Link to="/Signin">Cart</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Topheader;
