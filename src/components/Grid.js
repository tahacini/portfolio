import React, { useState } from "react";

function Grid({ foto, name, live, code }) {
  const [display, setDisplay] = useState("none");

  const showBox = () => {
    setDisplay("box");
  };

  const hideBox = () => {
    setDisplay("none");
  };

  return (
    <div>
      <div onMouseEnter={() => showBox()} onMouseLeave={() => hideBox()}>
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
            className={display === "box" ? "zoom" : "unzoom"}
            src={foto}
            alt="Some of my projects"
          />
        </a>
      </div>
    </div>
  );
}

export default Grid;
