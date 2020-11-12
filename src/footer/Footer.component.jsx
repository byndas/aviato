import React, { useContext } from "react";
import "./footer.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import translate from "../language/translate";
import { LanguageContext } from "../context/LanguageContext";

function Footer() {
  const { language } = useContext(LanguageContext);
  const {
    News,
    Home,
    AboutUs,
    Projects,
    Gallery,
    Catalog,
    Contact,
    Abouttext
  } = translate[language];

  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item mt-5 text-uppercase">
              <ul
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <li>
                  <Link className="nav-link" to="/">
                    {Home} <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/news">
                    {News} <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    {AboutUs} <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/projects">
                    {Projects} <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item mt-5 text-uppercase">
              <ul
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <li>
                  <Link className="nav-link" to="/gallery">
                    {Gallery} <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/catalog">
                    {Catalog} <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    {Contact} <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item-text mt-n4">
              <p className="heading-secondary">
                1*209{" "}
                <img
                  alt="logo"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginBottom: "6px",
                    borderRadius: "50%"
                  }}
                  src={logo}
                />
              </p>
              <p className="about text-center">{Abouttext}</p>
            </div>
            <div className="col item d-flex justify-content-center">
              <a className="nav-link" href="https://www.youtube.com/">
                <FontAwesomeIcon className="footer_socials" icon={faYoutube} />
              </a>
              <a href="https://www.instagram.com/?hl=en" className="nav-link">
                <FontAwesomeIcon
                  className="footer_socials"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://www.facebook.com/LIVE.Branding.Official/posts/3465174490183797"
                className="nav-link"
              >
                <FontAwesomeIcon className="footer_socials" icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <p className="copyright text-center">1*209 © 2020</p>
    </div>
  );
}

export default Footer;
