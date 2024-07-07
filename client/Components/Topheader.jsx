import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearchSharp } from 'react-icons/io5';
import logo from '../src/assets/logo.png';
import { Link } from 'react-router-dom';
import './Topheader.css';

function Topheader() {
  return (
    <header className='topheader'>
      <div className="top_nav">
        <img src={logo} alt="logo" />
        <div className="topleftbtn">
          <button className="btnleft">All</button>
          <IoSearchSharp className="icon" />
          <input type="text" className="searchinput" id="searchinput" placeholder="Search..." />
          <button className="btnright">Search</button>
        </div>
        <section className="signcart">
          <div className="sign">
            <div className="signinicon">
              <p><VscAccount /></p>
            </div>
            <div className="signin">
              <Link to="/Signin"><button>Sign in</button></Link>
            </div>
          </div>
          <div className="cart">
            <h1><FiShoppingCart /></h1>
            <div>
              <p>My</p>
              <h4>Cart</h4>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Topheader;
