import React, { Component } from "react";
import Plane from "../../images/jpg/propeller.jpg";
import backgroundImage from "../../backgroundImage";
import "./About.styles.css";
import Footer from "../../footer/Footer.component";
import translate from "../../language/translate";
import { LanguageContext } from "../../context/LanguageContext";

class About extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { AboutUs, Abouttext } = translate[language];
    return (
      <div>
        <div style={backgroundImage(Plane)}>
          <div className="container text-center">
            <h1 className="display-3 heading-secondary mt-4">{AboutUs}</h1>
            <div className="jumbotron jumbotron-fluid shadow p-9 mb-2 bg-white mt-5  paragraph_background">
              <div className="container">
                <p className="lead font-weight-bold">{Abouttext}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
