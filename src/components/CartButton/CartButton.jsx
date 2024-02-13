
import React from 'react';
import { TbShoppingCartSearch } from "react-icons/tb";
import './CartButton.css';

function CartButton({ cart, handleToggleCart }) {
  return (
    <button type='button' className='cartButton' onClick={handleToggleCart}>
      <TbShoppingCartSearch />
      <span className='cartStatus'>{cart.length}</span>
    </button>
  );
}

export default CartButton;

