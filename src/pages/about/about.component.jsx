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
    <h1 style={{color: '#fff', fontFamily: "BPG Nino Mtavruli", fontWeight: 'bold' }} className="p-3 heading text-uppercase">{AboutUs}</h1>
            <div className="jumbotron container jumbotron-fluid shadow p-9 mb-2  paragraph_background">
              <div className="container">
                <p>{Abouttext}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

export default About;
 