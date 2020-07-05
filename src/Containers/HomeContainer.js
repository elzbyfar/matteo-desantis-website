import React, { useState } from 'react';
import Images from '../AssetLibraries/Images';
import Press from '../Components/About/Press';
import BioContent from '../Components/About/Bio';
import FooterInfo from '../Components/FooterInfo';
import Navigation from '../NavBars/Navigation';
import Gallery from '../Components/About/Gallery';
import Testimonials from '../Components/About/Testimonials';
import AboutSidebar from '../NavBars/AboutSidebar';
import BookSidebar from '../NavBars/BookSidebar';
import '../Styles/HomeContainer.css';
import CatalogueSidebar from '../NavBars/CatalogueSidebar';

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
	const [ music, setMusic ] = useState(true)
	const [ videos, setVideos ] = useState(false)

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
					{catalogue && <div className="about-content-container">
						<CatalogueSidebar 
							music={music}
							videos={videos}
							setMusic={setMusic}
							setVideos={setVideos}
						/>
						</div>}
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
