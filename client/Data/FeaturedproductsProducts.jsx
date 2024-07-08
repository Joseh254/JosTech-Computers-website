import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import "./FeaturedproductsProducts.css";
import lp from "../src/assets/laptop5.jpeg";

function FeaturedproductsProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/products/get");
        setProducts(response.data.data); 
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div className="productswrapper">
      <div className="productstitle">
        <h1>Laptops</h1>
      </div>

      <section className="laptops">
        {products.map((product) => (
          <div className="laptopcontainer" key={product.productId}>
            <img src={lp} alt={product.productName} />
            <h1>{product.productName}</h1>
            <p className="description">{product.productDescription}</p>
            <h3>Now {product.productPrice}</h3>
            <button>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FeaturedproductsProducts;
