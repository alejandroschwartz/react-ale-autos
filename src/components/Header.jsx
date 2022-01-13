import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/ale-autos.png';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import Menu from './Menu';
import MenuLocation from './MenuLocation';
import MyOrder from '../containers/MyOrder';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleLocation, setToggleLocation] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrders(false);
    setToggleLocation(false);
  }
  const handleToggleOrders = () => {
    setToggle(false);
    setToggleOrders(!toggleOrders);
    setToggleLocation(false);
  }
  const handleToggleLocation = () => {
    setToggle(false);
    setToggleOrders(false);
    setToggleLocation(!toggleLocation);
  }

  return (
    <nav className="Header">
      <button className="Header__icon" onClick={() => setNavbar(!navbar)} >
        {navbar === true 
          ? <i className='fas fa-times'></i>
          : <i className='fas fa-bars'></i>
        }
      </button>
      <div className="Header__left">
        <img className="Header__logo" src={logo} alt="logo" />
      </div>
      <div className="Header__right">
        <ul>
          <li className="Header__user" onClick={handleToggleLocation}>
            <i className="fas fa-map-marker-alt"></i>
            <p><small>Enviar a</small><br />Ciudad</p>
          </li>
          <li className="Header__user" onClick={handleToggleOrders} >
            <i className="fas fa-shopping-cart"></i>
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
          <li className="Header__user" onClick={handleToggle} >
            <i className="far fa-user-circle"></i>
          </li>
        </ul>
      </div>
      { toggle && 
        <Menu
          toggle={toggle}
          setToggle={setToggle}
        />
      }
      { toggleOrders && 
        <MyOrder 
          toggleOrders={toggleOrders} 
          setToggleOrders={setToggleOrders} 
        /> 
      }
      { toggleLocation && 
        <MenuLocation 
          toggleLocation={toggleLocation} 
          setToggleLocation={setToggleLocation} 
        /> 
      }
    </nav>
  )
}