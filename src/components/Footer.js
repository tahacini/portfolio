import React from "react";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="footer-container flex text-shadow fs-200">
      <div className="footer-text">
        <div>Designed & Built by Taha Cini </div>
        <div className="logo-small">
          <a
            href="https://github.com/tahacini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="my logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
