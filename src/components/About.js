import React from "react";
import myfoto from "../img/myfoto.jpeg";

function About() {
  return (
    <section className="section-container section-margin relative">
      <div className="fs-550 text-shadow bottom">Who is this?</div>
      <div className="grid about-container">
        <div className="fs-600 about-bg text-shadow">
          Hi, this is Taha, I am a Front-end developer and my job is build the
          web for You{" "}
        </div>
        <div className="foto">
          <img src={myfoto} alt="my foto" />
        </div>
        <div className="fs-300 about-text text-shadow">
          I love building good looking things that I can see, that’s why I
          become a Front-end Developer. I work around to build pixel perfect and
          smooth pages.
        </div>
      </div>
    </section>
  );
}

export default About;
