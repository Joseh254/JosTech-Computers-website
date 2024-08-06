import React, { useEffect, useState } from "react";
import "./Cart.css";
import { api_url } from "../../../utills/config";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem(jwt_token);
        
console.log('Token from local storage:', token);

        if (!token) {
          throw new Error("No token found");
        }
  
        const response = await fetch(`${api_url}/api/cart/GetUserCart/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
  
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCartItems();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>
              <h2>{product.productName}</h2>
              <p>{product.productDescription}</p>
              <p>Price: Ksh{product.productPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
