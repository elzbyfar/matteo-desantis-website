import React, { useState } from 'react';
import Images from '../AssetLibraries/Images';
import '../Styles/HomeContainer.css'

const HomeContainer = () => {

  const [contentOpen, setContentOpen] = useState(false)

  return (
    <div className="home-container-container">

      <div className="home-body">
        <img src={Images.logo} className={contentOpen ? "small-logo" : "logo"}/>
        <div className={contentOpen ? "content" : "content-closed"}>
          
        </div>
        <div className="buttons-container">
          <button onClick={() => setContentOpen(true)} className="button">ABOUT</button>
          <button onClick={() => setContentOpen(true)} className="button">BOOK</button>
          <button onClick={() => setContentOpen(true)} className="button">CATALOGUE</button>
        </div>
      </div>

      <img src={Images.backgroundVideo} className="background-video" />
    </div>
  );
}

export default HomeContainer;
