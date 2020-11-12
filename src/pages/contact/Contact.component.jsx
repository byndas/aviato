import React, {useContext} from "react";
import Footer from "../../footer/Footer.component";
import "./Contact.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import translate from '../../language/translate'
import { LanguageContext } from '../../context/LanguageContext'

function Contact() {
  const { language } = useContext(LanguageContext);
  const { ContactDetails } = translate[language];
  return (
    <div style={{backgroundColor: '#fff1d0'}}>
      <div className="contact_container">
        <div className="container mt-5 position-relative">
          <div className='shadow p-3 mb-5 rounded contact-info'>
               <h2>{ContactDetails}</h2>
               <span className='d-flex mt-3 align-items-center'>
                  <FontAwesomeIcon className='facebook_icon' icon={faFacebook}/>
                  <p className='ml-3 mt-3'> geoaviation@gmail.com</p>
               </span>
               <span className='d-flex mt-3 align-items-center'>
                   <FontAwesomeIcon className='instagram_icon' icon={faInstagram}/>
                  <p className="mt-3 ml-3"> geoaviation@gmail.com</p>
                  </span>
                  <span className='d-flex mt-3 align-items-center'>
                    <FontAwesomeIcon icon={faPhone} />
                     <p className="mt-3 ml-3">(+995) 599 595 595</p>
                   </span>
                   <span className='d-flex mt-3 align-items-center'>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <p className="mt-3 ml-3">georgiaAviation@gmail.com</p>
                   </span>
             </div>
          <div className="google_map">
            <iframe
              title='location'
              src="https://maps.google.com/maps?q=tbilisi&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
