import { useState } from "react";
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'

const slides = [
  img2,
  img1,
  img3,
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-full object-cover flex-shrink-0"
            alt="slide"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2
        w-12 h-12 rounded-full bg-black/40
        flex items-center justify-center
        text-white text-2xl hover:bg-black/60"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2
        w-12 h-12 rounded-full bg-black/40
        flex items-center justify-center
        text-white text-2xl hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition
              ${current === index ? "bg-white" : "bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
