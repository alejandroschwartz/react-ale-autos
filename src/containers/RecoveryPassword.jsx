import React from 'react'

export default function RecoveryPassword() {
  return (
    <div className="login">
      <div className="color-yellow">
      </div>
      <div className="form-container">
        <img className="logo" src="./logos/logo_yard_sale.svg" alt="logo" />
        <h1 className="title">El email ha sido enviado!</h1>
        <p className="subtitle">Revisá tu bandeja de entrada para instrucciones sobre como resetear tu contraseña.</p>
        <div className="email-image">
          <img src="./icons/email.svg" alt="email" />
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