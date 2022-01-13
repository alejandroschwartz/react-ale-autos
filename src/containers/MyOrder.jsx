import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';
import arrow from '../assets/icons/flechita.svg';

export default function MyOrder({ toggleOrders, setToggleOrders }) {
	const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    console.log(reducer, sum)
    return sum;
  } 

	return (
		<aside className="MyOrder">
			<div className="MyOrder__header">
				<button className='title__arrow' onClick={() => setToggleOrders(!toggleOrders)} >
					<img src={arrow} alt="arrow" />
				</button>
				<p className="MyOrder__title">Mi orden</p>
			</div>
			<div className='MyOrder__items'>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
			</div>
			<div className="MyOrder__footer">
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}