import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900 p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg">
          Alemeno
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-400 focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div
        className={`md:flex md:items-center md:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm flex-grow flex-row justify-end">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-400 hover:bg- mr-4"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/studentdashboard"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-400 hover:bg- mr-4"
            onClick={closeMenu}
          >
            My courses
          </Link>
          <Link
            to="/studentdashboard"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-blue-400 hover:bg- mr-4"
            onClick={closeMenu}
          >
            Student Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;