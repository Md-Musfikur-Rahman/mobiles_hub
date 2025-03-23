"use client";
import { heroSliderImages } from "@/public/constants";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [image, setImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = (newIndex) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setImage(newIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevslide = () => {
    const newIndex =
      (image - 1 + heroSliderImages.length) % heroSliderImages.length;
    changeSlide(newIndex);
  };

  const nextslide = () => {
    const newIndex = (image + 1) % heroSliderImages.length;
    changeSlide(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextslide();
    }, 6000);

    return () => clearTimeout(timer);
  }, [image]);

  return (
    <div className="mx-auto h-[70vh] my-4 overflow-hidden relative">
      <div
        className={`relative w-full h-full transition-opacity duration-500 ${
          isTransitioning ? "opacity-50" : "opacity-100"
        }`}
      >
        <Image
          src={heroSliderImages[image].imgURL}
          alt="Hero image"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 text-center w-full px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Discover the Future of Mobile Technology
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              Explore the latest innovations in smartphones and stay ahead of
              the curve
            </p>
            <button className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3 z-10">
          {heroSliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => changeSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === image
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevslide}
            className="bg-white/10 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextslide}
            className="bg-white/10 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
