import { useState } from "react";
import logo from '../assets/tbh.png.avif'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx- px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="logo" className="ms-5 h-12 w-auto" />

          {/* Desktop Menu */}
          <div className="flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.12em] text-gray-900 ">
            <a href="#" className="hover:text-indigo-600">
              HOME
            </a>
            <a href="#" className="hover:text-indigo-600">
              BATHROOM ESSENTIALS
            </a>
            <a href="#" className="hover:text-indigo-600">
              TOWEL & PAPER HOLDERS
            </a>
            <a href="#" className="hover:text-indigo-600">
              PREMIUM & LUXUARY
            </a>
            <a href="#" className="hover:text-indigo-600">
              STORAGE & ORGANIZERS
            </a>
            <a href="#" className="hover:text-indigo-600">
              SAFETY & COMFORT
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            Features
          </a>
          <a href="#" className="block">
            Pricing
          </a>
          <a href="#" className="block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
