import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./Cart.css";
import { api_url } from "../../../utills/config";
import useUserStore from "../../../store/userStore";
import axios from "axios"

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchCartItems = async () => {
      console.log(user);
      
      try {
        const response = await axios.get(`${api_url}/api/cart/GetUserCart/${user.id}`,{withCredentials:true});
        console.log(response);
        
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        setError(error.message);
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
