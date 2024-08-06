import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import "./FeaturedproductsProducts.css";
import { Link } from "react-router-dom";
import { api_url } from "../../../utills/config";

function FeaturedproductsProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${api_url}/api/products/get`);
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
    <>
      <div className="sign">
        <div className="signinicon"></div>
      </div>
      <div className="productswrapper">
        <div className="productstitle">
          <h1>Laptops</h1>
        </div>

        <section className="laptops">
          {products.map((product) => (
            <div className="laptopcontainer" key={product.productId}>
              <img src={product.productImage} alt={product.productName} />
              <h1>{product.productName}</h1>

              <p>
                <strike>was Ksh {product.productPrice + 300}</strike>
              </p>
              <h3>Now Ksh {product.productPrice}</h3>
              <button>
                <FaShoppingCart /> Add to Cart
              </button>

              <div className="more">
                {" "}
                <Link to={`/product/${product.id}`}>
                  {" "}
                  <h4 className="morebtnlink">More &rarr;</h4>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default FeaturedproductsProducts;
