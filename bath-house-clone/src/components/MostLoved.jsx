import React from 'react'
import ll1 from "../assets/ll1.webp";
import ll2 from "../assets/ll2.webp";
import ll3 from "../assets/ll3.webp";
import ll4 from "../assets/ll4.webp";



const mostLovedItems = [
  { img: ll1, title: '4 WAY HOOK THE BATH HOUSE', price: 'Rs. 2,565.00', cut: ' Rs. 2,850.00'},
  { img: ll2, title: 'THUMBLER HOLDER - THE BATH HOUSE', price: 'Rs. 2,565.00', cut: ' Rs. 2,100.00'},
  { img: ll3, title: 'TOWEL BAR - THE BATH HOUSE', price: 'Rs. 2,565.00', cut: ' Rs. 2,450.00'},
  { img: ll4, title: 'SOAP DISH - THE BATH HOUSE', price: 'Rs. 2,565.00', cut: ' Rs. 2,100.00'},

]



function MostLoved() {
  return (
    <section className="max-w-8xl mx-auto px-4 py-16">
      <h1 className="text-center text-5xl font-bold">MOST LOVED</h1>

      <div className=" grid grid-cols-2 md:grid-cols-4 pt-9 gap-10">
        {mostLovedItems.map((item, index) => (
          <div key={index} className="text-center">
            <div className="border  border-gray-200 overflow-hidden  transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src={item.img}
                alt={item.title}
                className=' className=" w-100 h-100 object-cover'
              />
            </div>

            <p className="mt-3 text-sm font-bold tracking-wide">{item.title}</p>

            <p className="flex justify-center items-center gap-2">
              <span className="text-base text-gray-900">{item.price}</span>

              <span className="text-sm text-gray-400 line-through">
                {item.cut}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MostLoved
