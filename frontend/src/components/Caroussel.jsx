import React, { useState } from 'react';
import leftArrow from '../assets/leftArrow1.png';
import rightArrow from '../assets/rightArrow1.png';

function Carousel({ pictures, onChange }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    const prevSlide = currentSlide === 0 ? pictures.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
    onChange(prevSlide); // Appel de la fonction onChange avec le nouvel index
  };

  const handleNextSlide = () => {
    const nextSlide = currentSlide === pictures.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
    onChange(nextSlide); // Appel de la fonction onChange avec le nouvel index
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