import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional: install lucide-react or use any icon library

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" sticky bg-[#fff] top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-[#101c36">
            SaySocial
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">About</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Services</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Contact</a>
          </div>

           <div className='hidden md:flex'>
            <button className='bg-[#e86294] p-2 text-white rounded-2xl shadow-lg'>Connect</button>
          </div> 
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Services</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-orange-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
