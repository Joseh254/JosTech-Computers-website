import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { api_url } from "../../../utills/config";
import useUserStore from "../../../store/userStore";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";

function CheckoutOverlay({ onClose }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      town: "",
    },
    onSubmit: function handleSubmit(values) {
      console.log(values);
    },
    validate: function validate() {
      let error = {};
    },
  });
  return (
    <div className="overlay">
      <div className="overlayContent">
        <div className="CheckoutHeader">
          <h2>
            Lipa Na <span>Mpesa</span>
          </h2>
          <button onClick={onClose} className="closeOverlayBtn">
            X
          </button>
        </div>
        <form onSubmit={formik.handleSubmit}>
<div className="containerForm"> 
  
<div className="checkoutformvalues">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={formik.handleChange}
              value={formik.email}
            />
          </div>
</div>

          <div className="checkoutformvalues">
            {/* <label htmlFor="address">Address:</label> */}
            <input 
            type="text"
             name="address" 
            placeholder="Your home address"
            onChange={formik.handleChange}
            value={formik.address}
             />
          </div>

          <div className="checkoutformvalues">
            {/* <label htmlFor="email">City:</label> */}
            <input 
            type="text"
             name="town"
             placeholder="City"
             onChange={formik.handleChange}
             value={formik.town}
             />
          </div>
          <button className="paynow">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [isOverlayVisible, setOverlayVisible] = useState(false); // Overlay state
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
        { withCredentials: true },
      );
    } catch (error) {
      handleError(error);
    }
  };

  const handleDelete = async (itemId) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${api_url}/api/cart/deleteCartItem/${itemId}`,
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemId),
        );
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
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
    }).format(amount);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.productPrice * (quantities[item.id] || 1);
    }, 0);
  };

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
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
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
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
      <div>
        <button onClick={toggleOverlay} className="checkoutbutton">Checkout</button>
      </div>

      {isOverlayVisible && <CheckoutOverlay onClose={toggleOverlay} />}
    </div>
  );
}

export default Cart;
