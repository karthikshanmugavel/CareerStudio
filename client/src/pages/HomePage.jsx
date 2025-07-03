import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";

const HomePage = () => {
  const images = Object.values(assets);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  // Duplicate first image to end for smooth infinite effect
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000); // 3s delay

    return () => clearInterval(interval);
  }, []);

  // When animation completes and we hit duplicate, reset to real first image
  useEffect(() => {
    if (currentIndex === images.length) {
      // Disable transition, reset to first image
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // match duration

      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, images.length]);

  return (
    <div className="flex items-start justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-6xl h-[500px] overflow-hidden rounded-xl shadow-xl border border-gray-200 relative">
        <div
          ref={carouselRef}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${
              currentIndex * (100 / extendedImages.length)
            }%)`,
            width: `${extendedImages.length * 100}%`,
          }}
        >
          {extendedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="h-[500px] object-cover flex-shrink-0"
              style={{ width: `${100 / extendedImages.length}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
