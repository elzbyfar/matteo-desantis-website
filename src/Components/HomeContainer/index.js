import React, { useState } from 'react';
import Images from '../../Helpers/Images';

import Bio from '../Bio';
import Press from '../Press';
import Contact from '../Contact';
import Gallery from '../Gallery';
import Music from '../Music';
import Videos from '../Videos';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Book from '../Book';
import Testimonials from '../Testimonials';
import About from '../About';
import Catalogue from '../Catalogue';

import '../../Styles/HomeContainer.css';

const HomeContainer = () => {
	const [ about, setAbout ] = useState(false);
	const [ bio, setBio ] = useState(true);
	const [ gallery, setGallery ] = useState(false);
	const [ press, setPress ] = useState(false);
	const [ testimonials, setTestimonials ] = useState(false);

	const [ book, setBook ] = useState(false);
	const [ contact, setContact ] = useState(true);

	const [ catalogue, setCatalogue ] = useState(false);
	const [ music, setMusic ] = useState(true);
	const [ videos, setVideos ] = useState(false);

	return (
		<div className="home-container-container">
			<div className="home-body">
				<img src={Images.logo} className={about || book || catalogue ? 'small-logo' : 'logo'} />
				<div className={about || book || catalogue ? 'content' : 'content-closed'}>
					{about && (
						<div className="about-content-container">
							<About
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
								{bio && <Bio />}
								{gallery && <Gallery />}
								{press && <Press />}
								{testimonials && <Testimonials />}
							</div>
						</div>
					)}

					{book && (
						<div className="about-content-container">
							<Book
								contact={contact}
								setContact={setContact}
							/>
							<div className="about-content">
								{contact && <Contact />}
							</div>
						</div>
					)}

					{catalogue && (
						<div className="about-content-container">
							<Catalogue 
								music={music} 
								videos={videos} 
								setMusic={setMusic} 
								setVideos={setVideos} 
							/>
							<div className="about-content">
								{music && <Music />}
								{videos && <Videos />}
							</div>
						</div>
					)}
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
			<Footer />
		</div>
	);
};

export default HomeContainer;
