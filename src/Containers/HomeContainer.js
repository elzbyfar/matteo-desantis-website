import React, { useState } from 'react';
import Images from '../AssetLibraries/Images';
import Press from '../Components/Press';
import BioContent from '../Components/BioContent';
import FooterInfo from '../Components/FooterInfo';
import Navigation from '../Components/Navigation';
import Gallery from '../Components/Gallery';
import Testimonials from '../Components/Testimonials';
import '../Styles/HomeContainer.css';

const HomeContainer = () => {
	const [ about, setAbout ] = useState(false);
	const [ book, setBook ] = useState(false);
	const [ catalogue, setCatalogue ] = useState(false);
	const [ bio, setBio ] = useState(true)
	const [ gallery, setGallery ] = useState(false)
	const [ press, setPress ] = useState(false)
	const [ testimonials, setTestimonials ] = useState(false)

	return (
		<div className="home-container-container">
			<div className="home-body">
				<img src={Images.logo} className={about || book || catalogue ? 'small-logo' : 'logo'} />
				<div className={about || book || catalogue ? 'content' : 'content-closed'}>
					<div className="about-content-container">
						<div className="content-links">
							<button onClick={() => {
								setBio(true)
								setGallery(false)
								setPress(false)
								setTestimonials(false)
							}} className={bio ? "sub-links-highlighted" : "sub-links"}>BIO</button>
							<button onClick={() => {
								setBio(false)
								setGallery(true)
								setPress(false)
								setTestimonials(false)
							}} className={gallery ? "sub-links-highlighted" : "sub-links"}>GALLERY</button>
							<button onClick={() => {
								setBio(false)
								setGallery(false)
								setPress(true)
								setTestimonials(false)
							}} className={press ? "sub-links-highlighted" : "sub-links"}>PRESS</button>
							<button onClick={() => {
								setBio(false)
								setGallery(false)
								setPress(false)
								setTestimonials(true)
							}} className={testimonials ? "sub-links-highlighted" : "sub-links"}>TESTIMONIALS</button>
						</div>

						<div className="about-content">
							{bio && <BioContent />}
							{gallery && <Gallery />}
							{press && <Press />}
							{testimonials && <Testimonials />}
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
