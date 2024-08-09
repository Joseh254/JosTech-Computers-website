import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { api_url } from "../../../utills/config";
import useUserStore from "../../../store/userStore";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
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
        const data = response.data;

        if (data.success) {
          setCartItems(data.cartProduct);
          const initialQuantities = data.cartProduct.reduce((acc, item) => {
            acc[item.id] = item.quantity || 1; // Default to 1 if quantity is not available
            return acc;
          }, {});
          setQuantities(initialQuantities);
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

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setError("Quantity must be greater than zero");
      return;
    }

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  
    try {
      await axios.put(
        `${api_url}/api/cart/updateCart${itemId}`,
        { quantity: newQuantity },
        { withCredentials: true }
      );
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  const handleDelete = async (itemId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${api_url}/api/cart/deleteCartItem/${itemId}`, {
        withCredentials: true,
      });
      if (response.data.success) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } else {
        setError(response.data.message || "Failed to delete item");
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
    }).format(amount);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.product.productPrice * (quantities[item.id] || 1));
    }, 0);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartSection">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <h2>{item.product.productName}</h2>
              <p>Price: {formatCurrency(item.product.productPrice)}</p>
              <div className="ProductsToPurchase">
                <label>Items to Purchase</label>
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                />
              </div>
              <button onClick={() => handleDelete(item.id)} className="removeItemFromCartBtn">
                {loading ? "Removing..." : "Remove item"}
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cartTotal">
        <h2>Total: {formatCurrency(calculateTotal())}</h2>
      </div>
    </div>
  );
}

export default Cart;
