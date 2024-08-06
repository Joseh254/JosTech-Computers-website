import React, { useEffect, useState } from "react";
import "./Cart.css";
import { api_url } from "../../../utills/config";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch cart items
    const fetchCartItems = async () => {
      try {
        // Replace `your_jwt_token` with the actual token
        const token = localStorage.getItem(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6Impvc2VoIiwiaWF0IjoxNzIwMzUxODU4fQ.-kJW4UlDGnfOnh36dZ8g62KWD0VuQS5Hr6CnyyWc3nA",
        );
        const response = await fetch(`${api_url}/api/cart/GetUserCart/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
