import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Login.scss';

import logoYardSale from '@logos/logo_yard_sale.svg'

export default function Login() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }  

  return (
    <div className="login">
      <div className="form-container">
        <img className="logo" src={logoYardSale} alt="logo" />
        <h1 className="title">Iniciar sesión</h1>
        <form className="form" action="/" ref={form} >
          <label className="label" htmlFor="password">
            Correo electronico
          </label>
          <input
            className="input input-password"
            type="text"
            name="email"
            placeholder="ejemplo@correo.com"
          />
          <label className="label" htmlFor="password">
            Contraseña
          </label>
          <input
            className="input input-password"
            type="password"
            name="password"
            placeholder="******"
          />
          <button className="primary-button login-button" onClick={handleSubmit}>
            Iniciar sesión
          </button>
          <NavLink to="/recovery-password">Olvidé mi contraseña</NavLink>
        </form>
        <button className="secondary-button login-button">
          Registrarse
        </button>
      </div>
    </div>
  );
}