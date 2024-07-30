import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import useUserStore from "../../store/userStore";
import "./Topheader.css";

function Topheader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [signedIn, setSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const user = useUserStore((state) => state.user);
  const changeUserInformation = useUserStore((state) => state.changeUserInformation);

  useEffect(() => {
    if (user) {
      setSignedIn(true);
      if (user.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setSignedIn(false);
      setIsAdmin(false);
    }
  }, [user]);

  const handleSignInToggle = () => {
    navigate("/Signin");
  };

  const handleLoginToggle = () => {
    navigate("/Login");
  };

  const handleLogout = () => {
    changeUserInformation(null);
    setSignedIn(false);
    setIsAdmin(false);
    navigate("/Login");
  };

  const isLoginPage = location.pathname === "/Login";

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
              
            </h1>
            <div>
              {signedIn && !isLoginPage && !isAdmin && (
                <button className="">
                  <Link to="/Cart" className='cartlink'><FiShoppingCart /> Cart</Link>
                </button>
              )}
              {!signedIn && !isLoginPage && (
                <>
                  <button onClick={handleLoginToggle}>Log In</button>
                  <button onClick={handleSignInToggle}>Sign Up</button>
                </>
              )}
              {signedIn && (
                <>
                  <button onClick={handleLogout}>Log Out</button>
                  <p>Welcome {user.firstName}</p>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Topheader;
