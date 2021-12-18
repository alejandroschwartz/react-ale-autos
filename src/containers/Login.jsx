import React from 'react';
import '../styles/Login.scss';

export default function Login() {
  return (
    <div className="login">
      <div className="color-yellow"></div>
      <div className="form-container">
        <img className="logo" src="./logos/logo_yard_sale.svg" alt="logo" />
        <h1 className="title">Crear nueva contraseña</h1>
        <p className="subtitle">Ingrese una nueva contraseña para su cuenta.</p>
        <form className="form" action="/">
          <label className="label" for="password">
            Contraseña
          </label>
          <input
            className="input input-password"
            type="password"
            id="password"
            placeholder="******"
          />
          <label className="label" for="password">
            Repetir contraseña
          </label>
          <input
            className="input input-password"
            type="password"
            id="password"
            placeholder="******"
          />
          <input
            className="primary-button login-button"
            type="submit"
            value="Confirmar"
          />
        </form>
      </div>
    </div>
  );
}
