import React, { useContext } from "react";
import "./About.styles.css";
import Footer from "../../footer/Footer.component";
import translate from "../../language/translate";
import { LanguageContext } from "../../context/LanguageContext";

function About() {
    const { language } = useContext(LanguageContext);
    const { AboutUs, Abouttext } = translate[language];
    return (
      <div>
        <div className='about-page'>
          <div className="container text-center">
            <h1 className="p-3 font-italic heading text-uppercase">{AboutUs}</h1>
            <div className="jumbotron jumbotron-fluid shadow p-9 mb-2 bg-white mt-5  paragraph_background">
              <div className="container">
                <p className="font-weight-bold">{Abouttext}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

export default About;
 