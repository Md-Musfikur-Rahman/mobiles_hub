"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}</span>;
};

const TopCard = ({ phone_name, slug, favorites, hits }) => {
  return (
    <div className="p-2">
      <div className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/60 to-white/30 border border-white/20 px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)] hover:-translate-y-1 transition-all duration-300 group">
        <Link href={`/products/${slug}`} className="block">
          <h2 className="text-base font-semibold text-gray-800 group-hover:text-purple-600 capitalize mb-3 transition-colors duration-300">
            {phone_name}
          </h2>

          <div className="flex gap-4 text-sm text-gray-600">
            {favorites !== undefined && (
              <div className="flex items-center gap-1 group-hover:text-pink-500 transition-colors duration-300">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                </svg>
                <Counter end={favorites} />
              </div>
            )}

            {hits !== undefined && (
              <div className="flex items-center gap-1 group-hover:text-yellow-500 transition-colors duration-300">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <Counter end={hits} /> Hits
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopCard;
