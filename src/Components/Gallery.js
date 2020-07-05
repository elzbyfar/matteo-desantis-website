import React, { useState } from 'react';
import Images from '../AssetLibraries/Images';

const Gallery = () => {
	const [ selectedIndex, setSelectedIndex ] = useState(0);

  if (selectedIndex === -1) {
    setSelectedIndex(Images.gallery.length-1)
  } else if (selectedIndex === Images.gallery.length) {
    setSelectedIndex(0)
  }

	return (
		<div className="gallery-container">
			<div className="arrows-and-slides">
				<a href={`#${selectedIndex}`}>
					<img
						onClick={() => {
							setSelectedIndex(selectedIndex - 1);
						}}
						src={Images.left}
						className="arrows"
					/>
				</a>
				<ul className="slides">
					{Images.gallery.map((pic, index) => {
						return (
							<li>
								<img
									key={index}
									src={pic}
									id={`${index}`}
									className={selectedIndex === index ? 'selected-slide' : 'unSelected-slide'}
								/>
							</li>
						);
					})}
				</ul>
				<a href={`#${selectedIndex}`}>
					<img
						onClick={() => {
							setSelectedIndex(selectedIndex + 1);
						}}
						src={Images.right}
						className="arrows"
					/>
				</a>
			</div>

			<ul className="thumbnails">
				{Images.gallery.map((pic, index) => {
					return (
						<li
							onClick={() => {
								setSelectedIndex(index);
							}}
							className="thumb-container"
						>
							<a key={index} href={`#${index}`}>
								<img
									src={pic}
									className={selectedIndex === index ? 'selected-thumb' : 'unSelected-thumb'}
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Gallery;
