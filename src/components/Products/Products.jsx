import React, { useState, useEffect } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';

function Products({ cart, setCart, showCart, handleToggleCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    fetchProducts('nome').then((response) => {
      setProducts(response);
    });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.valor, 0).toFixed(2);
  };

  const handleClickProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <section className='products container'>
      <h2>Lista de Produtos</h2>
      <ul className="products-grid">
        {products.map(product => (
          <li key={product.id} className="product-card">
            <img
              src={product.imagem}
              alt={product.nome}
              className='product-image'
              onClick={() => handleClickProduct(product)} 
            />
            <h3>{product.nome}</h3>
            <p>Preço: R${product.valor}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div className="productModal">
          
          <div className="product-card">
            <img
              src={selectedProduct.imagem}
              alt={selectedProduct.nome}
              className='product-image'
            />
            <h3>{selectedProduct.nome}</h3>
            <p>Preço: R${selectedProduct.valor}</p>
            <button onClick={() => addToCart(selectedProduct)}>Adicionar ao Carrinho</button>
            <button className="closeButton" onClick={handleCloseProduct}>Fechar</button>
          </div>
        </div>
      )}
      {showCart && (
        <div className="cart">
          <h2>Carrinho</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <h3>{item.nome}</h3>
                <p>Preço: R${item.valor}</p>
                <button onClick={() => removeItemFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <p>Total: R${getTotalPrice()}</p>
          <button onClick={clearCart}>Limpar Carrinho</button>
          <button onClick={handleToggleCart}>Fechar</button>
        </div>
      )}
    </section>
  );
}

export default Products;
