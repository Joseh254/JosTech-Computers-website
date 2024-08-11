import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { api_url } from "../../../utills/config";
import useUserStore from "../../../store/userStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const user = useUserStore((state) => state.user);
  const changeCartCounter = useUserStore((state) => state.updateCartCount);

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

        if (data && data.success) {
          if (Array.isArray(data.cartProduct)) {
            setCartItems(data.cartProduct);

            const initialQuantities = data.cartProduct.reduce((acc, item) => {
              acc[item.id] = item.quantity || 1;
              return acc;
            }, {});
            setQuantities(initialQuantities);
            changeCartCounter(data.cartProduct.length);
          } else {
            setError("Unexpected response format");
          }
        } else {
          setError(data.message || "Failed to fetch cart items");
        }
      } catch (error) {
        console.error(error);
        
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user, changeCartCounter]);

  const handleError = (error) => {
    const message = error.response?.data?.message || error.message;
    setError(message);
    toast.error(message);
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      toast.warning("Quantity cannot be zero");
      return;
    }

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));

    try {
      await axios.put(
        `${api_url}/api/cart/updateCart/${itemId}`,
        { quantity: newQuantity },
        { withCredentials: true }
      );
    } catch (error) {
      handleError(error);
    }
  };

  async function  handleDelete  (itemId) {
    setLoading(true);
    try {
      const response = await axios.delete(`${api_url}/api/cart/deleteCartItem/${itemId}`, {
        withCredentials: true,
      });
      console.log(response.data.data.length);
      

      if (response.data.success) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        toast.success("Product removed from your cart");
        changeCartCounter(response.data.data.length);
      } else {
        toast.error(response.data.message || "Failed to delete item");
      }
    } catch (error) {
      handleError(error);
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
                <label htmlFor={`quantity-${item.id}`}>Items to Purchase</label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                />
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="removeItemFromCartBtn"
                disabled={loading}
              >
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
