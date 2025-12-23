import React from "react";
import tbb from "../assets/tbh.png.avif";

function Footer() {
  return (
    <footer className="bg-neutral-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img src={tbb} alt="The Bath House" className="w-36 mb-6" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Bathhouse, a brand by R P Products (India), is dedicated to
            redefining bathroom luxury and functionality. Founded with a passion
            for innovation and quality craftsmanship, Bathhouse offers a
            complete range of bath accessories, fittings, and lifestyle
            essentials that bring elegance and durability to modern homes.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-extrabold tracking-wide mb-4">
            QUICK LINKS
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>Home</li>
            <li>Bathroom Essentials</li>
            <li>Towel & Paper Holders</li>
            <li>Premium & Luxury</li>
            <li>Storage & Organizers</li>
            <li>Safety & Comfort</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold tracking-wide mb-4">
            LEGAL POLICIES
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Contact Information</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold tracking-wide mb-4">
            CONTACT US
          </h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex gap-3 items-start">
              <span>📞</span>
              <span>+91-98157-00570</span>
            </li>
            <li className="flex gap-3 items-start">
              <span>✉️</span>
              <span>info@bathhouse.in</span>
            </li>
            <li className="flex gap-3 items-start">
              <span>📍</span>
              <span>
                #115-116, New Grain Market, Gill Road, Ludhiana, Punjab
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-10">
        <p className="mb-7 text-center text-sm text-gray-500">
          Copyright © 2025 R P Products (India). All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
