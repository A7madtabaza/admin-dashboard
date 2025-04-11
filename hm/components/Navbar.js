"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-pink-600">عيادتي</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-pink-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              الرئيسية
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-pink-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              الخدمات
            </Link>
            <Link
              href="/doctors"
              className="text-gray-800 hover:text-pink-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              الأطباء
            </Link>
            <Link
              href="/appointments"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              حجز موعد
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-pink-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-pink-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-pink-50">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-md font-medium"
              onClick={toggleMenu}
            >
              الرئيسية
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-md font-medium"
              onClick={toggleMenu}
            >
              الخدمات
            </Link>
            <Link
              href="/doctors"
              className="block px-3 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-md font-medium"
              onClick={toggleMenu}
            >
              الأطباء
            </Link>
            <Link
              href="/appointments"
              className="block px-3 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-md font-medium"
              onClick={toggleMenu}
            >
              حجز موعد
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-md font-medium"
              onClick={toggleMenu}
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
