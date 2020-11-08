import React, { Component } from "react";
import "./footer.styles.css";
import youtube from "../images/svg/youtube.svg";
import instagramIcon from "../images/svg/instagramIcon.svg";
import facebookIcon from "../images/svg/facebookIcon.svg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import translate from "../language/translate";
import { LanguageContext } from "../context/LanguageContext";

class Footer extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { News, Home, AboutUs, Projects, Gallery, Catalog, Contact, Abouttext} = translate[language];
    return (
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item mt-5 text-uppercase">
                <ul>
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
                <ul>
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
                  <img alt="logo" style={{ width: "25px",
                      height: "25px",
                      marginBottom: "6px"
                    }}
                    src={logo} />
                </p>
                <p className="about">{Abouttext}</p>
              </div>
              <div className="col item d-flex justify-content-center">
                <a className="nav-link" href="https://www.youtube.com/">
                  <img className="youtube_icon" src={youtube} alt="youtube" />
                </a>
                <a href="https://www.instagram.com/?hl=en" className="nav-link">
                  <img
                    className="instagram_icon"
                    src={instagramIcon}
                    alt="instagram"
                  />
                </a>
                <a
                  href="https://www.facebook.com/LIVE.Branding.Official/posts/3465174490183797"
                  className="nav-link"
                >
                  <img
                    className="facebook_icon"
                    src={facebookIcon}
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <p className="copyright text-center">1*209 © 2020</p>
      </div>
    );
  }
}

export default Footer;
