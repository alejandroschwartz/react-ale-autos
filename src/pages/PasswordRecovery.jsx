import React from 'react'
import '../styles/PasswordRecovery.scss'

import logoYardSale from '@logos/logo_yard_sale.svg'
import logoEmail from '@icons/email.svg'

export default function PasswordRecovery() {
  return (
    <div className="login">
      {/* <div className="color-yellow">
      </div> */}
      <div className="form-container">
        <img className="logo" src={logoYardSale} alt="logo" />
        <h1 className="title">El email ha sido enviado!</h1>
        <p className="subtitle">Revisá tu bandeja de entrada para instrucciones sobre como resetear tu contraseña.</p>
        <div className="email-image">
          <img src={logoEmail} alt="email" />
        </div>
        <button className="primary-button login-button">
          Registrate
        </button>
        <p className="resent">
          <span>No recibiste el email?</span>
          <a href="/">Reenviar</a>
        </p>
      </div>
    </div>
  )
}