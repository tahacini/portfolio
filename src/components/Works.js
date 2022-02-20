import Grid from "./Grid";
import fort from "../img/fort.png";
import todo from "../img/todo.png";
import calculator from "../img/calculator.png";
import weather from "../img/weather.png";
import clone from "../img/clone.png";
import news from "../img/news.png";
import portfolio from "../img/portfolio.png";

function Works() {
  return (
    <section className="section-margin">
      <div className="fs-550 work-title text-shadow bottom">
        Some of my works
      </div>
      <div className="grid grid-foto box-shadow">
        <Grid
          foto={weather}
          name={"< Weather App />"}
          live={"https://nowweathers.netlify.app/"}
          code={"https://github.com/tahacini/weather-app"}
        />
        <Grid
          foto={news}
          name={"< Topic News />"}
          live={"https://topicnews.netlify.app/"}
          code={"https://github.com/tahacini/topic-news"}
        />
        <Grid
          foto={portfolio}
          name={"< Portfolio Page />"}
          live={""}
          code={"https://github.com/tahacini/portfolio"}
        />
        <Grid
          foto={fort}
          name={"< Fortnite App />"}
          live={"https://fortnite-api-app.netlify.app/"}
          code={"https://github.com/tahacini/fortnite-api-app"}
        />
        <Grid
          foto={clone}
          name={"< Clone Sites />"}
          live={"https://monster-mat.glitch.me"}
          code={"https://github.com/tahacini/clone-sites"}
        />
        <Grid
          foto={todo}
          name={"< ToDo App />"}
          live={"https://my4-todos-app.netlify.app/"}
          code={"https://github.com/tahacini/todo-app"}
        />
        <Grid
          foto={calculator}
          name={"< Calculator />"}
          live={"https://apricot-marvelous-sweater.glitch.me/"}
          code={"https://github.com/tahacini/javaScript-calculator"}
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
