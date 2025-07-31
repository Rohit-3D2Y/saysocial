import React, { useState } from "react";

const images = [
  "/assets/1img (1).png",
  "/assets/1img (2).png",
  "/assets/1img (3).png",
  
  "/assets/1img (5).png",
  "/assets/1img (4).png",
  "/assets/1img (6).png",
];

export default function InstaPostCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
     {/* Header */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center mb-2 bg-[#e86294] rounded-2xl pr-4 text-sm font-semibold text-white gap-2">
        
          <span className="inline-flex items-center"><span className="w-8 h-8 mr-1 bg-[#101b36] rounded-full flex justify-center items-center"><i className="fa-regular fa-circle"></i></span></span>
          Designs
        </div>
        <h2 className="text-3xl md:text-5xl brico tracking-tight text-[#101b36]">
          Services <span className='text-[#e86294]'>designed</span> to help your brand <span className="text-black"><span className='text-[#e86294]'>shine</span> brighter.</span>
        </h2>
      </div>
    <div className="relative flex justify-center items-center px-4 py-10 overflow-hidden">
      
      <div className="relative w-[360px] rounded-xl border bg-white shadow-lg z-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold text-sm">rohit.codes</span>
          </div>
          <button className="text-lg">⋮</button>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full h-auto">
          <div
            className="flex transition-transform duration-500 h-full gap-5"
style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 1.25}rem))` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="min-w-full h-full object-cover"
                alt={`img-${index}`}
              />
            ))}
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-black/40 hover:bg-black/60 rounded-full p-1 z-20"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-black/40 hover:bg-black/60 rounded-full p-1 z-20"
          >
            ›
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex gap-3 text-xl">
            <span>♡</span>
            <span>💬</span>
            <span>✈️</span>
          </div>
          <span>💾</span>
        </div>

        {/* Caption */}
        <div className="px-4 pb-4 text-sm">
          <p>
            <span className="font-semibold">rohit.codes</span> Exploring nature’s beauty 🌿
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
