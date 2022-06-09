import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        alt="Amazon Logo"
        className="footer__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <p className="footer__country">
        Austrália | Alemanha | Canadá | China | Cingapura | Espanha | Estados
        Unidos | França | Holanda | Índia | Itália | Japão | México
      </p>
      <p className="footer__country">
        Polônia | Emirados Árabes Unidos | Reino Unido | Turquia
      </p>
      <p className="footer__copy">Clone Amazon - React - Guilherme Massi</p>
    </div>
  );
}

export default Footer;
