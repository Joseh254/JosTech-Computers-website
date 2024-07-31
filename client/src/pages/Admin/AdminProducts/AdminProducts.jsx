import React, { useState, useEffect } from "react";
import "./AdminProducts.css";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import { api_url } from "../../../../utills/config";
import axios from "axios";




function AdminProducts() {
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
      <AdminHeader />
      <div className="">      
          <section className="adminproducts">
          {products.map((product) => (
            <div className="productscontainer" key={product.productId}>
              <img src={product.productImage} alt={product.productName} />
              <h1>{product.productName}</h1>
              <p className="">{product.productDescription}</p>
              <h3>price Ksh {product.productPrice}</h3>
              <div className="adminproductsactionbts">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </section>
        </div>
    </>
  );
}

export default AdminProducts;
