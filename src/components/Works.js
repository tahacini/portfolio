import Grid from "./Grid";
import fort from "../img/fort.png";
import todo from "../img/todo.png";
import drum from "../img/drum.png";
import clock from "../img/clock.png";
import quote from "../img/quote.png";
import markdown from "../img/markdown.png";
import clone from "../img/clone.png";

function Works() {
  return (
    <section className="section-margin">
      <div className="fs-550 work-title text-shadow bottom">
        Some of my works
      </div>
      <div className="grid grid-foto">
        <Grid
          foto={fort}
          name={"<Fortnite Api App />"}
          live={"https://fortnite-api-app.netlify.app/"}
          code={"https://github.com/tahacini/fortnite-api-app"}
        />
        <Grid
          foto={todo}
          name={"<ToDo App />"}
          live={"https://my4-todos-app.netlify.app/"}
          code={"https://github.com/tahacini/todo-app"}
        />
        <Grid
          foto={clone}
          name={"<Clone Sites />"}
          live={"https://monster-mat.glitch.me"}
          code={"https://github.com/tahacini/clone-sites"}
        />
        <Grid
          foto={quote}
          name={"<Quote App />"}
          live={"https://bedecked-intriguing-cephalopod.glitch.me/"}
          code={"https://github.com/tahacini/random-quote-machine"}
        />
        <Grid
          foto={clock}
          name={"<Clock App />"}
          live={"https://abaft-water-clutch.glitch.me/"}
          code={"https://github.com/tahacini/clock"}
        />
        <Grid
          foto={markdown}
          name={"<Markdown App />"}
          live={"https://reflective-ninth-club.glitch.me/"}
          code={"https://github.com/tahacini/markdown-previewer"}
        />
        <Grid
          foto={drum}
          name={"<Drum App />"}
          live={"https://meadow-elite-mass.glitch.me/"}
          code={"https://github.com/tahacini/drum-machine"}
        />
        <div>
          <div className="grid show-all fs-500">
            <a
              href="https://github.com/tahacini?tab=repositories"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              SHOW <br /> ALL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
