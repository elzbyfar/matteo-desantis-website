import React, { useState } from 'react';
import Images from '../AssetLibraries/Images';
import '../Styles/HomeContainer.css';

const HomeContainer = () => {
	const [ about, setAbout ] = useState(false);
	const [ book, setBook ] = useState(false);
	const [ catalogue, setCatalogue ] = useState(false);

	return (
		<div className="home-container-container">
			<div className="home-body">
				<img src={Images.logo} className={about || book || catalogue ? 'small-logo' : 'logo'} />
				<div className={about || book || catalogue ? 'content' : 'content-closed'} />
        
        {/* <div className="about-content-container">
          <div className="content-links">
            <ul>
              <li>BIO</li>
              <li>GALLERY</li>
              <li>PRESS + TESTIMONIALS</li>
            </ul>
          </div>
          <div className="about-content"></div>
        </div> */}
				<div className="buttons-container">
					<button
						onClick={() => {
							setAbout(true);
							setBook(false);
							setCatalogue(false);
						}}
						className={about ? 'highlight-button' : 'button'}
					>
						ABOUT
					</button>
					<button
						onClick={() => {
							setBook(true);
							setAbout(false);
							setCatalogue(false);
						}}
						className={book ? 'highlight-button' : 'button'}
					>
						BOOK
					</button>
					<button
						onClick={() => {
							setCatalogue(true);
							setAbout(false);
							setBook(false);
						}}
						className={catalogue ? 'highlight-button' : 'button'}
					>
						CATALOGUE
					</button>
				</div>
			</div>

			<div className="footer-info-container">
        
				<span className="footer-info">© COPYRIGHT 2020 MATTEO DESANTIS, LLC</span>
				<span className="footer-info">CONTACT:</span>
				<span className="footer-info">908.723.5320</span>
				<span className="footer-info"><a className="footer-links" href="mailto:matteodesantis@gmail.com" target="_blank">MatteoDeSantis@gmail.com</a></span>
				<span className="footer-info">WEB DESIGN: <a className="footer-links" href="https://www.linkedin.com/in/alejoluis/" target="_blank">Luis Alejo</a></span>

			</div>
			<img src={Images.backgroundVideo} className="background-video" />
		</div>
	);
};

export default HomeContainer;
