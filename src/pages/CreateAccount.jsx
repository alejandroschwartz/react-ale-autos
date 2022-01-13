import React from 'react';
import '../styles/CreateAccount.scss';

export default function CreateAccount() {
  return (
    <div className="login">
      {/* <div className="CreateAccount__color--yellow"></div> */}
      <div className="form-container">
        <h1 className="title">Registrarse</h1>
        <form className="form" action="/">
          <label className="label" for="name">Nombre</label>
          <input 
            className="input input-name" 
            type="text" 
            id="name" 
            placeholder="name"
          />
          <label className="label" for="email">Correo electronico</label>
          <input 
            className="input input-email" 
            type="email" 
            id="email" 
            placeholder="correo@email.com"
          />
          <label className="label" for="password">Contraseña</label>
          <input 
            className="input input-password" 
            type="password" 
            id="password" 
            placeholder="******"
          />
          <input className="primary-button login-button" type="submit" value="Crear" />
        </form>
      </div>
    </div>
  )
}
