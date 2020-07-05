import React from 'react';

const Navigation = (props) => {
	return (
		<div className="buttons-container">
			<button
				onClick={() => {
					props.setAbout(true);
					props.setBook(false);
					props.setCatalogue(false);
				}}
				className={props.about ? 'highlight-button' : 'button'}
			>
				ABOUT
			</button>
			<button
				onClick={() => {
					props.setBook(true);
					props.setAbout(false);
					props.setCatalogue(false);
				}}
				className={props.book ? 'highlight-button' : 'button'}
			>
				BOOK
			</button>
			<button
				onClick={() => {
					props.setCatalogue(true);
					props.setAbout(false);
					props.setBook(false);
				}}
				className={props.catalogue ? 'highlight-button' : 'button'}
			>
				CATALOGUE
			</button>
		</div>
	);
};

export default Navigation;
