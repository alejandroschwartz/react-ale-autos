import React from 'react'
import '../styles/ProductInfo.scss'

import btAddToart from '@icons/bt_add_to_cart.svg'

export default function ProductInfo() {
  return (
    <aside class="product-detail">
      <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomVbUdI76YFVQ0wOqvW1hWpT2tPHDgH23ZMPre4OIZ8b3ZlcoVKt0-QWs8T_CBTs1PbI&usqp=CAU"
        alt="Ford Ka"
      />
      <div class="product-info">
        <p>$3000,00</p>
        <p>Ford Ka</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          distinctio molestiae illum ad? Eum nihil fugit odit, eveniet tenetur
          recusandae officia, illo, cum culpa veritatis quia! Nostrum maiores
          vitae eligendi!
        </p>
        <button class="primary-button">
          <img src={btAddToart} alt="Add to cart" />
          Agregar al carrito
        </button>
      </div>
    </aside>
  );
}
