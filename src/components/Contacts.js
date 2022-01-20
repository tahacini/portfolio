import React from "react";

function Contacts() {
  return (
    <section className="section-container section-margin contacts-container">
      <div className="fs-550 text-shadow bottom">Let's work together</div>
      <div className="flex contacts">
        <a
          href="https://github.com/tahacini"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tahacini/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://www.facebook.com/cinitaha/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a
          href="https://www.instagram.com/taha.cini/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="mailto:taha.cini@outlook.com">taha.cini@outlook.com</a>
      </div>
    </section>
  );
}

export default Contacts;
