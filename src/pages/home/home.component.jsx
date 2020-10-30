import React, { Component } from "react";
import "./Home.styles.css";
// import video from "../images/video.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../context/LanguageContext";
import UsefulLinks from "./UsefulLinks.component";

const translate = {
  Geo: {
    WeatherOnTheRunways: "ამინდი ასაფრენ ბილიკებზე",
    usefulLinks: "სასარგებლო ლინკები"
  },
  Eng: {
    WeatherOnTheRunways: "Weather On The Runways",
    usefulLinks: "useful links"
  },
  Rus: {
    WeatherOnTheRunways: "Погода на полосах",
    usefulLinks: "Полезная ссылка"
  }
};

class Home extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { WeatherOnTheRunways, usefulLinks } = translate[language];
    return (
      <div className="slideshow">
        <ul>
          <li className="img-fluid"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="links">
          <div className="btn-group dropright runways">
            <button type="button" className="btn">
              {WeatherOnTheRunways}
            </button>
            <button
              type="button"
              className="btn dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </button>
            <div className="dropdown-menu"></div>
          </div>
          <div className="btn-group dropright usefulLinks">
            <button type="button" className="btn">
              {usefulLinks}
            </button>
            <button
              type="button"
              className="btn dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faShare} />
            </button>
            <div className="dropdown-menu">
              <UsefulLinks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
