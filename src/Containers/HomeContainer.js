import React, { useState } from 'react';
import Images from '../AssetLibraries/Images';
import Press from '../Components/Press';
import BioContent from '../Components/BioContent';
import FooterInfo from '../Components/FooterInfo';
import Navigation from '../Components/Navigation';
import Gallery from '../Components/Gallery';
import Testimonials from '../Components/Testimonials';
import AboutSidebar from '../Components/AboutSidebar';
import BookSidebar from '../Components/BookSidebar';
import '../Styles/HomeContainer.css';

const HomeContainer = () => {
	const [ about, setAbout ] = useState(false);
	const [ bio, setBio ] = useState(true)
	const [ gallery, setGallery ] = useState(false)
	const [ press, setPress ] = useState(false)
	const [ testimonials, setTestimonials ] = useState(false)

	const [ book, setBook ] = useState(false);
	const [ schedule, setSchedule ] = useState(true)
	const [ contact, setContact ] = useState(false)

	const [ catalogue, setCatalogue ] = useState(false);

	return (
		<div className="home-container-container">
			<div className="home-body">
				<img src={Images.logo} className={about || book || catalogue ? 'small-logo' : 'logo'} />
				<div className={about || book || catalogue ? 'content' : 'content-closed'}>
					{about && <div className="about-content-container">
						<AboutSidebar 
							bio={bio}
							gallery={gallery}
							press={press}
							testimonials={testimonials}
							setBio={setBio}
							setGallery={setGallery}
							setPress={setPress}
							setTestimonials={setTestimonials}
						/>
						<div className="about-content">
							{bio && <BioContent />}
							{gallery && <Gallery />}
							{press && <Press />}
							{testimonials && <Testimonials />}
						</div>
					</div>}
					{book && <div className="about-content-container">
						<BookSidebar 
							schedule={schedule}
							contact={contact}
							setSchedule={setSchedule}
							setContact={setContact}
						/>
						</div>}
					{catalogue && <div className="about-content-container"></div>}
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
