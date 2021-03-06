import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/ProductItem.scss'

import AppContext from '../context/AppContext';
import btAddToCart from '@icons/bt_add_to_cart.svg'

export default function ProductItem({ product }) {
  const { addToCart } = useContext(AppContext);
  const handleCart = item => {
    addToCart(item);
  }

  return (
    <div className="product-card">
      <NavLink to={`/product/${product.id}`} >
        <img
          className="product-img"
          src={product.images[0]}
          alt={product.title}
        />
      </NavLink>
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className="add-figure" onClick={() => handleCart(product)} >
          <img
            className="add-img"
            src={btAddToCart}
            alt="Agregar al carro"
          />
        </figure>
      </div>
    </div>
  );
}
