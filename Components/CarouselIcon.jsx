// src/Carousel.js
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let index = 0;

    const interval = setInterval(() => {
      index++;
      if (index >= images.length) {
        index = 0;
      }
      carousel.style.transition = 'transform 1s linear'; // Linear transition
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden relative w-full h-64">
      <div
        ref={carouselRef}
        className="flex"
        style={{ transition: 'transform 1s linear' }} // Initial linear transition
      >
        {images.map((image, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <Image height={100} width={100} src={image} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
