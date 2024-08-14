import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { api_url } from "../../../utills/config";
import useUserStore from "../../../store/userStore";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [isOverlayVisible, setOverlayVisible] = useState(false);
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

  const handleDelete = async (itemId) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${api_url}/api/cart/deleteCartItem/${itemId}`,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemId)
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

  const handleOrderPlacement = async (values) => {
    const total = formatCurrency(calculateTotal());
    try {
      const response = await axios.post(`${api_url}/api/sendOrderConfirmation`, {
        email: values.email,
        address: values.address,
        town: values.town,
        total,
      });
      console.log(response);
      

      if (response.data.success) {
        toast.success('Order has been placed, and a confirmation email has been sent!');
        setOverlayVisible(false);
      } else {
        toast.error('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('An error occurred while placing your order.');
    }
  };

  function CheckoutOverlay({ onClose }) {
    const formik = useFormik({
      initialValues: {
        email: "",
        address: "",
        town: "",
      },
      onSubmit: (values) => {
        handleOrderPlacement(values);
      },
      validate: function validate(values) {
        let error = {};
        if (!values.email) error.email = "Email is required";
        if (!values.address) error.address = "Address is required";
        if (!values.town) error.town = "Town is required";
        return error;
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
          <h2>Total: {formatCurrency(calculateTotal())}</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="containerForm">
              <div className="checkoutformvalues">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </div>

              <div className="checkoutformvalues">
                <input
                  type="text"
                  name="address"
                  placeholder="Your home address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
                {formik.errors.address ? <div>{formik.errors.address}</div> : null}
              </div>

              <div className="checkoutformvalues">
                <input
                  type="text"
                  name="town"
                  placeholder="City"
                  onChange={formik.handleChange}
                  value={formik.values.town}
                />
                {formik.errors.town ? <div>{formik.errors.town}</div> : null}
              </div>
              <button type="submit" className="paynow">Pay Now</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

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
              <img src={item.product.productImage} alt={item.product.productName} />
              <h3>{item.product.productName}</h3>
              <p>Price: {formatCurrency(item.product.productPrice)}</p>
              <p>Quantity:</p>
              <input
                type="number"
                value={quantities[item.id] || 1}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <p>
                Total: {formatCurrency(item.product.productPrice * (quantities[item.id] || 1))}
              </p>
              <button onClick={() => handleDelete(item.id)}>Remove</button>
            </div>
          ))}
          <div className="checkoutSection">
            <h2>Total: {formatCurrency(calculateTotal())}</h2>
            <button onClick={toggleOverlay} className="checkoutButton">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      {isOverlayVisible && <CheckoutOverlay onClose={toggleOverlay} />}
    </div>
  );
}

export default Cart;
