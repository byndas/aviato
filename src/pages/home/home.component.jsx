import React, { useContext } from "react";
import "./Home.styles.css";
import useWeatherState from "../../hooks/useWeatherState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notami from "./Notami";
import Runways from "./Runways.component";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../context/LanguageContext";
import UsefulLinks from "./UsefulLinks.component";
import translate from "../../language/translate";

function Home() {
  const { language } = useContext(LanguageContext);
  const { WeatherOnTheRunways, usefulLinks } = translate[language];
  const [tbilisi, setTbilisi] = useWeatherState({});
  const [batumi, setBatumi] = useWeatherState({});
  const [kutaisi, setKutaisi] = useWeatherState({});
  const [mestia, setMestia] = useWeatherState({});
  const [ambrolauri, setAmbrolauri] = useWeatherState({});
  const [telavi, setTelavi] = useWeatherState({});

  const getWeather = () => {
    setKutaisi("Kutaisi");
    setAmbrolauri("Ambrolauri");
    setTbilisi("Tbilisi");
    setBatumi("Batumi");
    setMestia("Mestia");
    setTelavi("Telavi");
  };
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
        <div className="btn-group dropright runways show">
          <button type="button" className="btn">
            {WeatherOnTheRunways}
          </button>
          <button
            onClick={getWeather}
            className="btn dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </button>
          <div className="dropdown-menu">
            <Runways
              tbilisi={tbilisi}
              batumi={batumi}
              kutaisi={kutaisi}
              ambrolauri={ambrolauri}
              mestia={mestia}
              telavi={telavi}
            />
          </div>
        </div>
        <div className="btn-group dropright usefulLinks">
          <button type="button" className="btn">
            {usefulLinks}
          </button>
          <button
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
        <div className="btn-group dropright notami">
          <button type="button" className="btn">
            ნოტამი
          </button>
          <button
            className="btn dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faShare} />
          </button>
          <div className="dropdown-menu">
            <Notami />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
