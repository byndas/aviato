import React from "react";
import Footer from "../../footer/Footer.component";
import facebook from "../../images/svg/facebookIcon.svg";
import InstagramIcon from "../../images/svg/instagramIcon.svg";
import "./Contact.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { backgroundColor } from "../catalog/Catalog.component";

function Contact() {
  return (
    <div style={backgroundColor}>
      <div className="contact_container">
        <div className="container text-center mt-5 position-relative">
          <div className="row border rounded-pill shadow  mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <img className="facebook_icon mt-3" src={facebook} alt="facebookIcon"/>
                <div className="media-body">
                  <p className="mt-3"> dkodkfo@dm.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border rounded-pill shadow  mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <img src={InstagramIcon} className="instagram_icon mt-3" alt="instagramIcon" />
                <div className="media-body">
                  <p className="mt-3"> dkodkfo@instagram.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border rounded-pill shadow  mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <FontAwesomeIcon icon={faPhone} className="mt-3" />
                <div className="media-body">
                  <p className="mt-3">+995 595 595</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border rounded-pill shadow  mb-2 bg-white  p-1 contact_hover">
            <div className="col">
              <div className="media">
                <FontAwesomeIcon icon={faEnvelope} className="mt-3" />
                <div className="media-body">
                  <p className="mt-3">georgiaAviation@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="google_map">
            <iframe
              title='location'
              src="https://maps.google.com/maps?q=tbilisi&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
