import React, { useState } from 'react';
import Korzina from './pages/Korzina';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const onUpdateQuantity = (id, quantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const onRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const onClearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Korzina
      cartItems={cartItems}
      onUpdateQuantity={onUpdateQuantity}
      onRemoveItem={onRemoveItem}
      onClearCart={onClearCart}
      totalPrice={totalPrice}
      onClose={() => console.log('close')}
    />
  );
};

export default App;
