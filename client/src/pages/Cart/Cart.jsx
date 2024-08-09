import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { api_url } from "../../../utills/config";
import useUserStore from "../../../store/userStore";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${api_url}/api/cart/GetUserCart`, {
          withCredentials: true,
        });

        // No need to parse response, axios handles it automatically
        const data = response.data;

        if (data.success) {
          setCartItems(data.cartProduct);
        } else {
          setError(data.message || "Failed to fetch cart items");
        }
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h2>{item.product.productName}</h2>
              <p>{item.product.productDescription}</p>
              <p>Price: Ksh {item.product.productPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
