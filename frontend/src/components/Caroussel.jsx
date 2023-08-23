import React, { useState } from 'react';
import leftArrow from '../assets/leftArrow1.png';
import rightArrow from '../assets/rightArrow1.png';


function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {pictures.length > 1 && ( 
          <>
            <img src={leftArrow} alt="Left Arrow" className="carousel-arrow left" onClick={handlePreviousSlide} />
            <img src={rightArrow} alt="Right Arrow" className="carousel-arrow right" onClick={handleNextSlide} />
          </>
        )}
        <img src={pictures[currentSlide]} alt="Carousel Slide" className="carousel-image" />
        {pictures.length > 1 && ( 
          <div className="image-position">{`${currentSlide + 1}/${pictures.length}`}</div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
