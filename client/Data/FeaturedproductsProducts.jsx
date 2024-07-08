import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import "./FeaturedproductsProducts.css";
import lp from "../src/assets/laptop5.jpeg"

function FeaturedproductsProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [productsPerPage] = useState(4); // Products per page

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/products/get");
        setProducts(response.data.data); // Assuming products are in response.data.data
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {currentProducts.map((product) => (
          <div  className="laptopcontainer">
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

      {/* Pagination */}
      <div className="pagination">
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map((number) => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeaturedproductsProducts;
