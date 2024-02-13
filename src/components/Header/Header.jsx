/**/


// Header.jsx// Header.jsx

import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import './Header.css';

function Header({ cart, handleToggleCart, setSearchTerm }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchTerm(searchInput);
  };

  return (
    <header className="header">
      <div className="container">
        <p>Lojinha Virtual</p>
        <CartButton cart={cart} handleToggleCart={handleToggleCart} />
      </div>
    </header>
  );
}

export default Header;
