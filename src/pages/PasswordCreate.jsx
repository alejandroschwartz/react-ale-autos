import React from 'react'
import '../styles/PasswordCreate.scss'

import logoYardSale from '@logos/logo_yard_sale.svg'

export default function PasswordCreate() {
  return (
    <div className="login">
      <div className="color-yellow">
      </div>
      <div className="form-container">
        <img className="logo" src={logoYardSale} alt="logo" />
        <h1 className="title">Crear nueva contraseña</h1>
        <p className="subtitle">Ingrese una nueva contraseña para su cuenta.</p>
        <form className="form" action="/">
          <label className="label" for="password">Contraseña</label>
          <input 
            className="input input-password" 
            type="password" 
            id="password" 
            placeholder="******"
          />
          <label className="label" for="password">Repetir contraseña</label>
          <input 
            className="input input-password" 
            type="password" 
            id="password" 
            placeholder="******"
          />
          <input className="primary-button login-button" type="submit" value="Confirmar" />
        </form>
      </div>
    </div>
  )
}
