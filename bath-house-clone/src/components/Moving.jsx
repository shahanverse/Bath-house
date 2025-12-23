import React from 'react'

function Moving() {
  return (
    <section className="bg-neutral-800 py-7 overflow-hidden">
      <div className="group flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">

        <span className="mx-12 text-6xl font-light text-white tracking-wide">
          Luxury, by Design
        </span>
        <span className="mx-12 text-6xl font-light text-white tracking-wide">
          Luxury, by Design
        </span>
        <span className="mx-12 text-6xl font-light text-white tracking-wide">
          Luxury, by Design
        </span>

        <span className="mx-12 text-6xl font-light text-white tracking-wide">
          Luxury, by Design
        </span>
        <span className="mx-12 text-6xl font-light text-white tracking-wide">
          Luxury, by Design
        </span>
        <span className="mx-12 text-6xl font-light text-white tracking-wide">
          Luxury, by Design
        </span>
      </div>
    </section>
  );
}

export default Moving
