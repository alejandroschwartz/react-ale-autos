import React from 'react';
import '../styles/MyAccount.scss';

export default function MyAccount() {
  return (
    <div className="login">
      {/* <div className="color-yellow">
      </div> */}
      <div className="form-container">
        <h1 className="title">Crear nueva contraseña</h1>
        <form className="form" action="/">
          <label className="label" for="name">Nombre</label>
          <p className="value">Alejandro Matias</p>
          <label className="label" for="email">Correo electronico</label>        
          <p className="value">alejandro@email.com</p>
          <label className="label" for="password">Contraseña</label>
          <p className="value">******</p>
          <input 
            className="secondary-button login-button" 
            type="submit" 
            value="Editar" 
          />
        </form>
      </div>
    </div>
  )
}
