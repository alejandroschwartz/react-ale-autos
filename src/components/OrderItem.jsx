import React, { useContext } from 'react'
import '../styles/OrderItem.scss'
import close from '../assets/icons/icon_close.png'
import AppContext from '../context/AppContext';

export default function OrderItem({ product }) {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = product => {
    removeFromCart(product);
  }

  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  )
}