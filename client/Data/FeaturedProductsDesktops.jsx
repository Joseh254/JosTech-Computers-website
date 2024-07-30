import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import "./FeaturedProductsDesktops.css";
import offer from "../src/assets/OFFER.png";
import { api_url } from "../utills/config";

function FeaturedProductsDesktops() {
  const [desktops, setDesktops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDesktops() {
      try {
        const response = await axios.get(`${api_url}/api/products/getdesktop`);
        setDesktops(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchDesktops();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching desktops: {error.message}</p>;
  }

  return (
    <>
      <div className="desktopheading">
        <h1>Desktops</h1>
      </div>
      <section className="desktopswrapper">
        {desktops.map((desktop) => (
          <div className="desktopcontainer" key={desktop.id}>
            <img src={desktop.desktopImage} alt={desktop.desktopName} />
            <h1>{desktop.desktopName}</h1>
            <p>{desktop.desktopDescription}</p>
            <p>
              <strike>Ksh {desktop.desktopPrice - 300}</strike>
            </p>
            <p className="price">Now Ksh {desktop.desktopPrice}</p>
            <button>
              <FaShoppingCart /> Add to cart
            </button>
          </div>
        ))}
        <div className="desktopoffers">
          <img src={offer} alt="offer image" />
        </div>
      </section>
    </>
  );
}

export default FeaturedProductsDesktops;
