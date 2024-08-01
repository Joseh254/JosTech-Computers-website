import React, { useState, useEffect } from "react";
import "./AdminProducts.css";
import { api_url } from "../../../../utills/config";
import axios from "axios";
import toast from "react-simple-toasts";
import { Link } from "react-router-dom";
function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletedProductId, setDeletedProductId] = useState(null);
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

  async function handleDeleteProduct(id) {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${api_url}/api/products/delete/${id}`,
      );
      if (response.data.success === true) {
        toast("Product deleted", { theme: "success" });
      }
      setProducts(products.filter((products) => products.id !== id));
    } catch (error) {
      setError(error.message);
      toast("There was an error when deleting", { theme: "failure" });
      setLoading(false);
    } finally {
      setLoading(false);
      setDeletedProductId(null);
    }

    function handleGoToAddProduct() {
      navigate("/AddProduct");
    }
    handleGoToAddProduct();
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }
  return (
    <>
      <div className="">
        <h1 className="messagesheading">Products Available</h1>
        <section className="adminproducts">
          {products.map((product) => (
            <div className="productscontainer" key={product.productId}>
              <img src={product.productImage} alt={product.productName} />
              <h1>{product.productName}</h1>

              <p> Products Remaining {product.productsRemaining}</p>
              <h3>price Ksh {product.productPrice}</h3>
              <div className="adminproductsactionbts">
                <button>Edit</button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="deleteproductsbtn"
                >
                  {deletedProductId === product.id ? "Deleting .." : "Delete"}
                </button>
              </div>
            </div>
          ))}
          <Link to={"/AddProduct"} className="AddProductLink">
            {" "}
            <button className="addproductsbtn">+</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default AdminProducts;
