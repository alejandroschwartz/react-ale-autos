import React from 'react'
import '../styles/ShoppingCartItem.scss'

export default function ShoppingCartItem() {
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src="https://acs2.blob.core.windows.net/imgcatalogo/l/VA_b71a8068f5dc490d98a4dbd31410f789.jpg"
          alt="ford ka"
        />
      </figure>
      <p>Ford Ka</p>
      <p>$3000,00</p>
    </div>
  );
}