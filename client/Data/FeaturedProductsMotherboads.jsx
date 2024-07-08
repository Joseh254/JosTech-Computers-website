import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import "./FeaturedProductsMotherboads.css"; 
import moth from "../src/assets/motth4.jpeg"

function FeaturedProductsMotherboards() {
  const [motherboards, setMotherboards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMotherboards() {
      try {
        const response = await axios.get("http://localhost:3000/api/products/getmotherboard");
        setMotherboards(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchMotherboards();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching motherboards: {error.message}</p>;
  }

  return (
    <>
      <div className="motherboardtitle">
        <h1>Motherboards</h1>
      </div>
      <div className="motherboardswrapper">
        {motherboards.map((motherboard) => (
          <div className="motherboardcontainer" key={motherboard.id}>
            <img src={moth} alt={motherboard.motherboardName} />
            <h1>{motherboard.motherboardName}</h1>
            <p>{motherboard.motherboarDescription}</p>
            <h3>{motherboard.motherboardPrice}</h3>
            <button>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProductsMotherboards;
