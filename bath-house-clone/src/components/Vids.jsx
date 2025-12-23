import React from 'react'
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";
import vid5 from "../assets/vid5.mp4";
import vid6 from "../assets/vid6.mp4";

const vids = [
  { img: vid1 },
  { img: vid2 },
  { img: vid3 },
  { img: vid4 },
  { img: vid5 },
  { img: vid6 },
];

function Vids() {
  return (
    <section className="max-w-8xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vids.map((video, index) => (
          <div key={index} className="overflow-hidden rounded-xl">
           
              <video
                src={video.img}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vids
