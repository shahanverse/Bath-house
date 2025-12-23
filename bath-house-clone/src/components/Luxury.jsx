import React from 'react'

function Luxury() {
  return (
    <section className="max-w-8xl px-1 py-28 bg-neutral-200">
      <h1 className="text-center text-3xl font-extrabold font-sans">
        LUXURY BATHWARE FOR MODERN HOMES
      </h1>
      <p className="mt-6 text-center text-sm text-gray-700 max-w-3xl mx-auto -tracking-tighter">
        Step into a world of refined design and timeless comfort. Bathhouse
        brings you premium bath fittings, accessories, and lifestyle essentials
        — crafted in India, made for the world.
      </p>
      <div className='flex justify-center items-center'>
        <button className=" mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
          shop now
        </button>
      </div>
    </section>
  );
}

export default Luxury
