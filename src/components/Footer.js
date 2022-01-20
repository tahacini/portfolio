import React from "react";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="footer-container flex text-shadow fs-200">
      <div className="footer-text">
        <div>Designed & Built by Taha Cini </div>
        <div className="logo-small">
          <img src={logo} alt="my logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
