import React, { useState } from 'react';
import Images from '../AssetLibraries/Images';
import BioContent from '../Components/BioContent';
import FooterInfo from '../Components/FooterInfo';
import Navigation from '../Components/Navigation';
import '../Styles/HomeContainer.css';

const HomeContainer = () => {
	const [ about, setAbout ] = useState(false);
	const [ book, setBook ] = useState(false);
	const [ catalogue, setCatalogue ] = useState(false);

	return (
		<div className="home-container-container">
			<div className="home-body">
				<img src={Images.logo} className={about || book || catalogue ? 'small-logo' : 'logo'} />
				<div className={about || book || catalogue ? 'content' : 'content-closed'}>
					<div className="about-content-container">
						<div className="content-links">
							<button className="sub-links">BIO</button>
							<button className="sub-links">GALLERY</button>
							<button className="sub-links">PRESS</button>
							<button className="sub-links">TESTIMONIALS</button>
						</div>

						<div className="about-content">
							<BioContent />
						</div>
					</div>
				</div>
				<Navigation 
					about={about}
					book={book}
					catalogue={catalogue}
					setAbout={setAbout}
					setBook={setBook}
					setCatalogue={setCatalogue}
				/>
			</div>
			<FooterInfo />
		</div>
	);
};

export default HomeContainer;
