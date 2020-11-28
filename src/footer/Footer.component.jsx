import React, { useContext } from "react";
import "./footer.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
    AeroClubGeorgia,
    Abouttext
  } = translate[language];

  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 item-text mt-n4">
              <p className="heading-secondary">
                1*209{" "}
              </p>
              <span className='aeroclub-name'>{AeroClubGeorgia}</span>
              <p className="about">{Abouttext}</p>
            </div>
            <div className="col position-relative">
               <div className='header-socials'>
              <a className="nav-link" href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="footer_socials" icon={faYoutube} />
              </a>
              <a href="https://www.instagram.com/?hl=en" className="nav-link" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon
                  className="footer_socials"
                  icon={faInstagram}
                />
              </a>
              <a href="https://www.facebook.com/LIVE.Branding.Official/posts/3465174490183797"
                className="nav-link" rel="noopener noreferrer" target="_blank" >
                <FontAwesomeIcon className="footer_socials" icon={faFacebook} />
              </a>
                </div>
              <div className='footer-socials-container'>
              <span className='d-flex  align-items-center'>
                  <FontAwesomeIcon className='footer_socials mb-2' icon={faFacebook}/>
                  <p style={{color: '#333'}}  className='ml-3'> geoaviation@gmail.com</p>
               </span>
               <span className='d-flex align-items-center'>
                   <FontAwesomeIcon className='footer_socials mb-2' icon={faInstagram}/>
                  <p style={{color: '#333'}}  className="ml-3"> geoaviation@gmail.com</p>
               </span>
                <span className='d-flex align-items-center'>
                    <FontAwesomeIcon className='footer_socials mb-2' icon={faPhone} />
                     <p style={{color: '#333'}}  className="ml-3">(+995) 599 595 595</p>
               </span>
               <span className='d-flex align-items-center'>
                      <FontAwesomeIcon className='footer_socials mb-2' icon={faEnvelope} />
                      <p style={{color: '#333'}}  className="ml-3">georgiaAviation@gmail.com</p>
               </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-uppercase d-flex navigation-container">
              <ul
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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
      <p className="copyright text-center">1*209 © 2020</p>
    </div>
  );
}

export default Footer;
