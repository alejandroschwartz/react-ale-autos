import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import Order from '../components/Order';
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss'

export default function Orders() {
	const { state } = useContext(AppContext);

  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">Mi orden</h1>
        <Order />
        {state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
      </div>
    </div>
  )
}
