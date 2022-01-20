import React, { useState } from "react";

function Grid({ foto, name, live, code }) {
  const [display, setDisplay] = useState("none");

  const showBox = (e) => {
    e.preventDefault();
    setDisplay("box");
  };

  const hideBox = (e) => {
    e.preventDefault();
    setDisplay("none");
  };

  return (
    <div>
      <div onMouseEnter={(e) => showBox(e)} onMouseLeave={(e) => hideBox(e)}>
        <div className={display}>
          <a
            href={live}
            target={"_blank"}
            rel="noopener noreferrer"
            className="fs-400 project"
          >
            {name}
          </a>
          <a
            href={code}
            target={"_blank"}
            rel="noopener noreferrer"
            className="fs-350 project-code"
          >
            <i className="fab fa-github"></i> Code
          </a>
        </div>
        <a href={live} target={"_blank"} rel="noopener noreferrer">
          <img
            className={display === "box" ? "zoom" : ""}
            src={foto}
            alt="Some of my projects"
          />
        </a>
      </div>
    </div>
  );
}

export default Grid;
