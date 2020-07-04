import React from 'react';
import Images from '../AssetLibraries/Images'


const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-card">
        <div className="image-title-container">
          <h4 className="image-title">MATTHEW DeSANTIS 01</h4>
        </div>
        <div className="photo-container">
          <img src={Images.matthew1} className="actual-photo"/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
