import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fab, faInstagram, faTwitter, faFacebook, faLinkedin, faSoundcloud, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
	return (
		<div>
			<div>
				<span>EMAIL</span>
        <br />
				<span>MatthewDeSantis@gmail.com</span>
			</div>
			<div>
				<span>PHONE</span>
        <br />
				<span>908.723.5320</span>
			</div>
      <div className="socials-container">
        <ul className="socials-list">
          <li><a className="socials" href=""><FontAwesomeIcon className="icons" icon={faInstagram} />Instagram</a></li>
          <li><a className="socials" href=""><FontAwesomeIcon className="icons" icon={faLinkedin} />LinkedIn</a></li>
          <li><a className="socials" href=""><FontAwesomeIcon className="icons" icon={faYoutube} />YouTube</a></li>
          <li><a className="socials" href=""><FontAwesomeIcon className="icons" icon={faTwitter} />Twitter</a></li>
          <li><a className="socials" href=""><FontAwesomeIcon className="icons" icon={faSoundcloud} />Soundcloud</a></li>
          <li><a className="socials" href=""><FontAwesomeIcon className="icons" icon={faFacebook} />Facebook</a></li>
        </ul>
      </div>
		</div>
	);
};

export default Contact;
