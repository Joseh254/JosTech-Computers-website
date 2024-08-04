import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api_url } from "../../../utills/config";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductDetails.css"; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`${api_url}/api/products/getOneProduct/${id}`);

        
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching product: {error.message}</p>;
  }

  return (
    <div className="product-details">
      {product ? (
        <>
<div className="laptopcontainerr">
<img src={product.productImage} alt={product.productName} />
              <h1>{product.productName}</h1>
              <p className="description">{product.productDescription}</p>
              <p>
                <strike>was Ksh {product.productPrice + 300}</strike>
              </p>
              <h3>Now Ksh {product.productPrice}</h3>
              <button>
                <FaShoppingCart /> Add to Cart
              </button>
</div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetails;
