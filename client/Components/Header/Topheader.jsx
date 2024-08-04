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
      {loading && <div className="loading-spinner"><ClipLoader size={50} /></div>}
      {!loading && searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((product) => (
              <li key={product.productId}>
                <Link to={`/product/${product.productId}`}>
                  <img src={product.productImage} alt={product.productName} />
                  <p>{product.productName}</p>
                  <p>{product.productPrice}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ToastContainer />
    </header>
  );
}

export default Topheader;
