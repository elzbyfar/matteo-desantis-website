import React from 'react';

const Catalogue = (props) => {
  return (
    <div className="content-links">
      <button onClick={() => {
        props.setMusic(true)
        props.setVideos(false)
      }} className={props.music ? "sub-links-highlighted" : "sub-links"}>MUSIC</button>
      <button onClick={() => {
        props.setMusic(false)
        props.setVideos(true)
      }} className={props.videos ? "sub-links-highlighted" : "sub-links"}>VIDEOS</button>
    </div>
  );
}

export default Catalogue;
