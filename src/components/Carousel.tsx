'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, src: '/data/images/execphoto2024.png', alt: 'Executive Photo 2024' },
    { id: 2, src: '/data/images/nys.png', alt: 'NYSCLSA 2025' },
    { id: 3, src: '/data/images/execphoto2024.png', alt: 'Executive Photo 2024' },
    { id: 4, src: '/data/images/execphoto2024.png', alt: 'Executive Photo 2024' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-darkBlue-900">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.src} 
              alt={slide.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black opacity-20" />
          </div>
        ))}

        <div className="absolute top-6 left-6 z-20">
          <div className="size-3/4 flex items-center justify-center overflow-hidden">
            <img 
              src="/data/images/logo.png" 
              alt="BTHS NHS Logo" 
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10">
          <h1 className="pl-20 text-6xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Brooklyn Technical<br /> High School NHS
          </h1>
          <p className="pl-20 text-xl text-gray-200 mt-4 drop-shadow-md">We aim to provide a platform for academic excellence and leadership development.</p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-gold hover:bg-yellow-400 text-darkBlue-900 w-12 h-12 rounded-full shadow-lg transition-all duration-200 font-bold text-xl"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-gold hover:bg-yellow-400 text-darkBlue-900 w-12 h-12 rounded-full shadow-lg transition-all duration-200 font-bold text-xl"
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gold w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
