import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const mockCartItems = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

function Account() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setCart(mockCartItems);
      setLoading(false);
    }, 1000);
  }, []);

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const purchaseCart = () => {
    
    setCart([]);
    alert('Purchase successful!');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={purchaseCart} disabled={cart.length === 0}>
        Purchase
      </button>

      <button><Link to="/">log out</Link></button>
    </div>
  );
}

export default Account;
