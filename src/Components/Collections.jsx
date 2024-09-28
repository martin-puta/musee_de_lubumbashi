import React from 'react';
import '../Style/Collections.css'
import MyImg from '../assets/visete.jpeg';
import MyImg2 from '../assets/side-view-woman-holding-vintage-mirror.jpg';
import MyImg3 from '../assets/african-kid-marketplace.jpg';
import MyImg4 from '../assets/MUSEEDEgOMA.jpg';




function Collections() {
  return (
    <div>
      <div className="container-principal">
      <h1>Articles récents</h1>
      <div className="image-gallery">
        <img src={MyImg} alt="Image 1" />
        <img src={MyImg2} alt="Image 1" />
        <img src={MyImg3} alt="Image 1" />
        <img src={MyImg4} alt="Image 1" />
       
      </div>
    </div>
    </div>
  );
}

export default Collections;
