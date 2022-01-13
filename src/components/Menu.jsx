import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Menu.scss'
import arrow from '../assets/icons/flechita.svg';

export default function Menu({ toggle, setToggle }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }
  const handleRegister = () => {
    navigate("/create-account");
  }

  return (
    <aside className="Menu">
			<div className="Menu__header">
				<button className='title__arrow' onClick={() => setToggle(!toggle)} >
					<img src={arrow} alt="arrow" />
				</button>
				<p className="MyOrder__title">Usuario</p>
			</div>
      <div className="desktop-menu">
        <ul>
          <li>
            <i className="far fa-user-circle"></i>
            <p>¡Hola usuario!</p>
          </li>
          <li>
            <NavLink to="/login">Iniciar sesión</NavLink>
          </li>
          <li>
            <NavLink to="/create-account">Registrarse</NavLink>
          </li>
          <li>
            <NavLink to="/create-password">Crear contraseña</NavLink>
          </li>
          <li>
            <NavLink to="/recovery-password">Recuperar contraseña</NavLink>
          </li>
          <li>
            <NavLink to="/">Mis cuentas</NavLink>
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