import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api_url } from "../../../utills/config";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify"; // Make sure to install react-toastify
import "react-toastify/dist/ReactToastify.css"; // Include the CSS for toast
import "./ProductDetails.css";
import useUserStore from "../../../store/userStore";
// Initialize toast notifications


function ProductDetails() {
  const user = useUserStore((state)=>state.user)
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
async function fetchProduct() {
if (!user){
  toast.warning("Please log in to view more  product details")
  navigate("/Login")
}else{
  try {
    const response = await axios.get(`${api_url}/api/products/getOneProduct/${id}`);
    setProduct(response.data.data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
}
    }

    async function checkIfInCart() {
      try {
        const response = await axios.get(`${api_url}/api/cart/GetUserCart`, { withCredentials: true });
        const cartItems = response.data.cartProduct;
        const isProductInCart = cartItems.some(item => item.productid === id);
        setIsInCart(isProductInCart);
      } catch (error) {
        setError(error);
      }
    }

    fetchProduct();
    checkIfInCart();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      if (isInCart) {
        toast.warning("Product is already in your cart!");
        return;
      }
      
      await axios.post(
        `${api_url}/api/cart/AddCart`,
        { productid: id, quantity: 1 },
        { withCredentials: true }
      );
      toast.success("Product added to cart!");
      setIsInCart(true);
    } catch (error) {
      toast(error.response?.data?.message || error.message);
    }
  };

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
            <button
              onClick={handleAddToCart}
              style={{
                backgroundColor: isInCart ? "black" : "blue",
                color: "white",
              }}
            >
              <FaShoppingCart /> {isInCart ? "In Cart" : "Add to Cart"}
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
