import cat1 from '../assets/cat1.webp'
import cat2 from '../assets/cat2.webp'
import cat3 from '../assets/cat3.webp'
import cat4 from '../assets/cat4.webp'
import cat5 from '../assets/cat5.webp'

 const categories = [
    { img: cat1, title: 'Bathroom Essentials' },
    { img: cat2, title: 'Premium & Luxury' },
    { img: cat3, title: 'Safety & Comfort' },
    { img: cat4, title: 'Storage & Organizers' },
    { img: cat5, title: 'Towel & Paper Holders' },
  ];
export default function Category() {
  return(
    <section className="max-w-8xl mx-auto px-4 py-16">
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {categories.map((item, index) => (
        <div key={index} className="text-center">
          <div className="border border-gray-200 rounded-2xl overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src={item.img}
              alt={item.title}
              className=' className="w-full h-72 object-cover'
            />
          </div>

          <p className="mt-3 text-sm font-bold tracking-wide">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  </section>
  )
}