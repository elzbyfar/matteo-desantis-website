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
				<div className={about || book || catalogue ? 'content' : 'content-closed'}>
					<div className="about-content-container">
						<div className="content-links">
							<button className="sub-links">BIO</button>
							<button className="sub-links">GALLERY</button>
							<button className="sub-links">PRESS</button>
							<button className="sub-links">TESTIMONIALS</button>
						</div>

						<div className="about-content">
							<span className="content-bio">
								<img className="bio-photo-1" src={Images.matthew1} />
								<p>
									Matthew DeSantis is an exciting and upcoming entertainer based in the New York City
									and Miami-Dade area. He performs with unique enthusiasm spurring a fun-loving
									atmosphere that transmits clearly to his audiences. He has performed as an opening
									act for major bands such as Dwight Yoakum, Steve Moakler, Blues Traveler and Lone
									Star. Powered by his one man band machine; he has traveled the world bringing his
									music to both the private and public arenas in the Tri-state area and in Miami
									Florida. Check him out on Instagram @MattyDMusic.
								</p>
								<p>
									Matthew DeSantis is an exciting and upcoming entertainer based in the New York City
									and Miami-Dade area. He performs with unique enthusiasm spurring a fun-loving
									atmosphere that transmits clearly to his audiences. He has performed as an opening
									act for major bands such as Dwight Yoakum, Steve Moakler, Blues Traveler and Lone
									Star. Powered by his one man band machine; he has traveled the world bringing his
									music to both the private and public arenas in the Tri-state area and in Miami
									Florida. Check him out on Instagram @MattyDMusic.
								</p>
								<p>
									Matthew DeSantis is an exciting and upcoming entertainer based in the New York City
									and Miami-Dade area. He performs with unique enthusiasm spurring a fun-loving
									atmosphere that transmits clearly to his audiences. He has performed as an opening
									act for major bands such as Dwight Yoakum, Steve Moakler, Blues Traveler and Lone
									Star. Powered by his one man band machine; he has traveled the world bringing his
									music to both the private and public arenas in the Tri-state area and in Miami
									Florida. Check him out on Instagram @MattyDMusic.
								</p>
								<img className="bio-photo-2" src={Images.matthew2} />
								
								<p>
									Matthew DeSantis is an exciting and upcoming entertainer based in the New York City
									and Miami-Dade area. He performs with unique enthusiasm spurring a fun-loving
									atmosphere that transmits clearly to his audiences. He has performed as an opening
									act for major bands such as Dwight Yoakum, Steve Moakler, Blues Traveler and Lone
									Star. Powered by his one man band machine; he has traveled the world bringing his
									music to both the private and public arenas in the Tri-state area and in Miami
									Florida. Check him out on Instagram @MattyDMusic.
								</p>
								
								<p>
									Matthew DeSantis is an exciting and upcoming entertainer based in the New York City
									and Miami-Dade area. He performs with unique enthusiasm spurring a fun-loving
									atmosphere that transmits clearly to his audiences. He has performed as an opening
									act for major bands such as Dwight Yoakum, Steve Moakler, Blues Traveler and Lone
									Star. Powered by his one man band machine; he has traveled the world bringing his
									music to both the private and public arenas in the Tri-state area and in Miami
									Florida. Check him out on Instagram @MattyDMusic.
								</p>
								<p>
									Matthew DeSantis is an exciting and upcoming entertainer based in the New York City
									and Miami-Dade area. He performs with unique enthusiasm spurring a fun-loving
									atmosphere that transmits clearly to his audiences. He has performed as an opening
									act for major bands such as Dwight Yoakum, Steve Moakler, Blues Traveler and Lone
									Star. Powered by his one man band machine; he has traveled the world bringing his
									music to both the private and public arenas in the Tri-state area and in Miami
									Florida. Check him out on Instagram @MattyDMusic.
								</p>
							</span>
						</div>
					</div>
				</div>
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
				<span className="footer-info">© COPYRIGHT 2020 MATTHEW DESANTIS, LLC</span>
				<span className="footer-info">CONTACT:</span>
				<span className="footer-info">908.723.5320</span>
				<span className="footer-info">
					<a className="footer-links" href="mailto:matthewdesantis@gmail.com" target="_blank">
						MatteoDeSantis@gmail.com
					</a>
				</span>
				<span className="footer-info">
					WEB DESIGN:{' '}
					<a className="footer-links" href="https://www.linkedin.com/in/alejoluis/" target="_blank">
						Luis Alejo
					</a>
				</span>
			</div>
			{/* <img src={Images.backgroundVideo} className="background-video" /> */}
		</div>
	);
};

export default HomeContainer;
