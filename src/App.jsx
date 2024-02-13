import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); 

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header cart={cart} handleToggleCart={handleToggleCart} />
      <Products cart={cart} setCart={setCart} showCart={showCart} handleToggleCart={handleToggleCart} />
    </div>
  );
}

export default App;
