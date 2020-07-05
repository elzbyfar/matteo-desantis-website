import React from 'react';

const AboutSidebar = (props) => {
	return (
		<div className="content-links">
			<button
				onClick={() => {
					props.setBio(true);
					props.setGallery(false);
					props.setPress(false);
					props.setTestimonials(false);
				}}
				className={props.bio ? 'sub-links-highlighted' : 'sub-links'}
			>
				BIO
			</button>
			<button
				onClick={() => {
					props.setBio(false);
					props.setGallery(true);
					props.setPress(false);
					props.setTestimonials(false);
				}}
				className={props.gallery ? 'sub-links-highlighted' : 'sub-links'}
			>
				GALLERY
			</button>
			<button
				onClick={() => {
					props.setBio(false);
					props.setGallery(false);
					props.setPress(true);
					props.setTestimonials(false);
				}}
				className={props.press ? 'sub-links-highlighted' : 'sub-links'}
			>
				PRESS
			</button>
			<button
				onClick={() => {
					props.setBio(false);
					props.setGallery(false);
					props.setPress(false);
					props.setTestimonials(true);
				}}
				className={props.testimonials ? 'sub-links-highlighted' : 'sub-links'}
			>
				TESTIMONIALS
			</button>
		</div>
	);
};

export default AboutSidebar;
