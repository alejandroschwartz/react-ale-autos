import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/MenuLocation.scss'
import arrow from '../assets/icons/flechita.svg';

export default function MenuLocation({ toggleLocation, setToggleLocation }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }
  const handleRegister = () => {
    navigate("/create-account");
  }

  return (
    <aside className="Location">
			<div className="Location__header">
				<button className='title__arrow' onClick={() => setToggleLocation(!toggleLocation)} >
					<img src={arrow} alt="arrow" />
				</button>
				<p className="Location__title">Ubicación</p>
			</div>
      <div className="desktop-menu">
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <p>¡Mi ubicación!</p>
          </li>
        </ul>
      </div>
			<div className="MyOrder__footer">
				<button onClick={handleLogin} className="secondary-button login-button">
					Iniciar sesión
				</button>
        <button onClick={handleRegister} className="primary-button">
					Registrarse
				</button>
			</div>
		</aside>
  )
}