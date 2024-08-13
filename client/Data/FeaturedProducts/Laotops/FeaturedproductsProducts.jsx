import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import "./FeaturedproductsProducts.css";
import { Link } from "react-router-dom";
import { api_url } from "../../../utills/config";
import useUserStore from "../../../store/userStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FeaturedproductsProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCart, setAddingToCart] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const user = useUserStore((state) => state.user);
  const changeCartCounter = useUserStore((state) => state.updateCartCount);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${api_url}/api/products/get`);
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    async function fetchCartItems() {
      if (user) {
        try {
          const response = await axios.get(`${api_url}/api/cart/GetUserCart`, {
            withCredentials: true,
          });

          const itemsInCart = response.data.cartProduct.map(
            (item) => item.product.id,
          );
          setCartItems(itemsInCart); // Update cartItems state with product IDs
          changeCartCounter(itemsInCart.length); // Update cart counter
        } catch (error) {
          // Handle error if needed
          console.error(error);
        }
      }
    }

    fetchProducts();
    fetchCartItems();
  }, [user, changeCartCounter]);

  const handleAddToCart = async (productId) => {
    if (!user) {
      toast.warning("Please log in first to add items to your cart.");
      return;
    }

    if (cartItems.includes(productId)) {
      toast.warning("Product is already in your cart!");
      return;
    }

    setAddingToCart((prevState) => ({ ...prevState, [productId]: true }));

    try {
      const response = await axios.post(
        `${api_url}/api/cart/AddCart`,
        { productid: productId },
        { withCredentials: true },
      );

      if (response.data.success) {
        setCartItems((prevState) => [...prevState, productId]);
        changeCartCounter(cartItems.length + 1); // Update cart count
        toast.success("Item added to cart successfully!", { theme: "success" });
      } else {
        toast.error("Failed to add item to cart.", { theme: "failure" });
      }
    } catch (error) {
      toast.error(`Error adding item to cart: ${error.message}`, {
        theme: "failure",
      });
    } finally {
      setAddingToCart((prevState) => ({ ...prevState, [productId]: false }));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <>
      <div className="sign">
        <div className="signinicon"></div>
      </div>
      <div className="productswrapper">
        <div className="productstitle">
          <h1>Laptops</h1>
        </div>

        <section className="laptops">
          {products.map((product) => (
            <div className="laptopcontainer" key={product.id}>
              <img src={product.productImage} alt={product.productName} />
              <h1>{product.productName}</h1>

              <p>
                <strike>was Ksh {product.productPrice + 300}</strike>
              </p>
              <h3>Now Ksh {product.productPrice}</h3>
              <button
                onClick={() => handleAddToCart(product.id)}
                disabled={addingToCart[product.id]}
                style={{
                  backgroundColor: cartItems.includes(product.id)
                    ? "black"
                    : "blue",
                  cursor: cartItems.includes(product.id)
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                {addingToCart[product.id] ? (
                  "Adding..."
                ) : (
                  <>
                    <FaShoppingCart /> Add to Cart
                  </>
                )}
              </button>

              <div className="more">
                <Link to={`/product/${product.id}`}>
                  <h4 className="morebtnlink">More &rarr;</h4>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default FeaturedproductsProducts;
