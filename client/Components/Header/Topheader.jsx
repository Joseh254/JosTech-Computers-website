import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import useUserStore from "../../store/userStore";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Topheader.css";
import { api_url } from "../../utills/config";

function Topheader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [signedIn, setSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const user = useUserStore((state) => state.user);
  const changeUserInformation = useUserStore((state) => state.changeUserInformation);

  useEffect(() => {
    if (user) {
      setSignedIn(true);
      setIsAdmin(user.role === "admin");
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

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${api_url}/api/products/get`);
      const allProducts = response.data.data;
      const filteredProducts = allProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResults(filteredProducts);
      setShowOverlay(true);
      if (filteredProducts.length === 0) {
        toast.error("Product not found");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
    setSearchResults([]);
    setSearchInput("");
  };

  function handleNavigateToProfile(){
    navigate("/Profile")
  }

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
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button className="btnright" onClick={handleSearch}>Search</button>
        </div>
        <section className="signcart">
          <div className="cart">
            <h1 className="headericons"></h1>
            <div className="headeractionbuttons">
              {signedIn && !isLoginPage && !isAdmin && (
                <button className="usercartBtn">
                  <Link to="/Cart" className='cartlink'><FiShoppingCart /> Cart</Link>
                </button>
              )}
              {!signedIn && !isLoginPage && (
                <>
                  <button onClick={handleLoginToggle} className="userLogInBtn">Log In</button>
                  <button onClick={handleSignInToggle} className="userSignupBtn">Sign Up</button>
                </>
              )}
              {signedIn && (
                <>
                    <div className="logoutProfile"> 
                      <button onClick={handleLogout} className="userLogoutBtn">Log Out</button>
                        <button className="userUpdateprofileBtn" onClick={handleNavigateToProfile}>Profile</button>
                        {/* <button>Welcome {user.firstName}</button> */}
                    </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      {showOverlay && (
        <div className="overlay" onClick={handleOverlayClose}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-overlay" onClick={handleOverlayClose}>X</button>
            {loading ? (
              <div className="loading-spinner"><ClipLoader size={50} /></div>
            ) : (
              <>
                {searchResults.length > 0 ? (
                  <ul className="search-results">
                    {searchResults.map((product) => (
                      <li key={product.id}>
                        <Link to={`/product/${product.id}`} onClick={handleOverlayClose} className="resultLink">
                          <img src={product.productImage} alt={product.productName} />
                          <p>{product.productName}</p>
                          <p>Ksh {product.productPrice}</p>
                          <p className="seemorelink">see more &rarr;</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No products found.</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </header>
  );
}

export default Topheader;
