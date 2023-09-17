"use client";
import { heroSliderImages } from "@/public/constants";
import Image from "next/image";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const [image, setImage] = useState(0);

  const prevslide = () => {
    setImage((image - 1 + heroSliderImages.length) % heroSliderImages.length);
  };

  const nextslide = () => {
    setImage((image + 1) % heroSliderImages.length);
  };

  const autoChangeImage = () => {
    const timer = setTimeout(() => {
      nextslide();
    }, 10500);

    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(autoChangeImage, [image]);

  return (
    <>
      <div className="mx-auto h-[70vh] my-4 flex justify-center items-center relative group">
        <Image
          src={heroSliderImages[image].imgURL}
          alt="Hero image"
          className="w-full h-full object-cover z-0"
        />
        <div className="text-blue-900 text-4xl font-bold absolute translate-y-1/2">
          Your Content Goes Here
        </div>

        <div className=" group-hover:flex hidden justify-between absolute w-full translate-y-1/2 duration-500">
          <div
            onClick={prevslide}
            className="text-black text-5xl text-center rounded-full w-12 h-12 cursor-pointer"
          >
            &#10094;
          </div>
          <div
            onClick={nextslide}
            className="text-black text-5xl text-center rounded-full w-12 h-12 cursor-pointer"
          >
            &#10095;
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
