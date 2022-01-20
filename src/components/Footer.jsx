import React from "react";

import "../styles/Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer__column">
          <p className="Footer__title">Ayuda</p>
          <p className="Footer__subtitle">Como comnprar</p>
          <p className="Footer__subtitle">Como vender</p>
          <p className="Footer__subtitle">Problemas</p>
          <p className="Footer__subtitle">Seguridaa</p>
          <p className="Footer__subtitle">Tarifas de envío</p>
          <p className="Footer__subtitle">Tu registro</p>
        </div>
        <div className="Footer__column">
          <p className="Footer__title">Conócenos</p>
          <p className="Footer__subtitle">Trabaja con nosotros</p>
          <p className="Footer__subtitle">Acerca de nosotros</p>
          <p className="Footer__subtitle">Terminos y condiciones</p>
          <p className="Footer__subtitle">Avisos legales</p>
          <p className="Footer__subtitle">Tendencias</p>
          <p className="Footer__subtitle">Sustentabilidad</p>
          <p className="Footer__subtitle">Inversiones</p>
        </div>
        <div className="Footer__column">
          <p className="Footer__title">Mi cuenta</p>
          <p className="Footer__subtitle">Ingresar</p>
          <p className="Footer__subtitle">Tus compras</p>
          <p className="Footer__subtitle">Tus envíos</p>
          <p className="Footer__subtitle">Retiros</p>
        </div>
        <div className="Footer__column">
          <p className="Footer__title">Redes sociales</p>
          <p className="Footer__subtitle">Facebook</p>
          <p className="Footer__subtitle">Instagram</p>
          <p className="Footer__subtitle">Twitter</p>
          <p className="Footer__subtitle">YouTube</p>
          <p className="Footer__subtitle">TikTok</p>
        </div>
      </div>
      <footer className="Ale">
        <div className="Ale__div">
          <p className="Ale__div--p">
            Diseño de página: <br />
            <strong>Alejandro Matías Schwartz</strong> <br />
            <small>Ciudad de Córdoba, Argentina</small>
          </p>
        </div>
      </footer>
    </>
  );
};