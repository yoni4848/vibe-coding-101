import { useState } from 'react';
import profileImg from '../img/275804038_2790083314471394_461145730567040956_n.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="relative bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 text-stone-800 min-h-screen flex flex-col overflow-hidden">
      {/* Wright-inspired geometric top border */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700"></div>
      <div className="absolute top-3 left-0 right-0 h-1 bg-stone-900"></div>

      {/* Navigation - Prairie School horizontal emphasis */}
      <nav className="w-full bg-stone-800 border-b-4 border-amber-600 fixed top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Refined Geometric Wright style */}
            <div className="flex-shrink-0">
              <div className="relative w-14 h-14 flex items-center justify-center">
                {/* Cleaner geometric frame - rotated 45 degrees */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 transform rotate-45 shadow-lg"></div>
                <div className="absolute inset-0.5 bg-stone-800 transform rotate-45"></div>
                <div className="absolute inset-1.5 border-2 border-amber-600/50 transform rotate-45"></div>
                {/* Text centered without rotation */}
                <span className="text-base font-bold text-amber-100 relative z-10 tracking-wider">YM</span>
              </div>
            </div>

            {/* Desktop Navigation - Horizontal emphasis */}
            <div className="hidden md:flex space-x-1">
              <button
                onClick={() => scrollToSection('About')}
                className="px-6 py-3 border-l-2 border-r-2 border-amber-600 hover:bg-amber-600 text-amber-100 transition-all font-semibold tracking-wide uppercase text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('Skills')}
                className="px-6 py-3 border-l-2 border-r-2 border-amber-600 hover:bg-amber-600 text-amber-100 transition-all font-semibold tracking-wide uppercase text-sm"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('Projects')}
                className="px-6 py-3 border-l-2 border-r-2 border-amber-600 hover:bg-amber-600 text-amber-100 transition-all font-semibold tracking-wide uppercase text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('Contact')}
                className="px-6 py-3 border-l-2 border-r-2 border-amber-600 hover:bg-amber-600 text-amber-100 transition-all font-semibold tracking-wide uppercase text-sm"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-100 hover:text-amber-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-900 border-t-2 border-amber-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('About')}
                className="block w-full text-left px-3 py-2 border-b border-amber-700 hover:bg-amber-600 text-amber-100 transition-colors uppercase text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('Skills')}
                className="block w-full text-left px-3 py-2 border-b border-amber-700 hover:bg-amber-600 text-amber-100 transition-colors uppercase text-sm"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('Projects')}
                className="block w-full text-left px-3 py-2 border-b border-amber-700 hover:bg-amber-600 text-amber-100 transition-colors uppercase text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('Contact')}
                className="block w-full text-left px-3 py-2 hover:bg-amber-600 text-amber-100 transition-colors uppercase text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Geometric Wright patterns */}
      <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-16 relative">
        {/* Decorative geometric elements */}
        <div className="absolute top-24 left-10 w-32 h-32 border-4 border-amber-700 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-orange-600 transform rotate-12 opacity-20"></div>

        <div className="text-center relative z-10 max-w-4xl">
          {/* Profile picture with refined geometric frame */}
          <div className="mb-12 relative">
            <div className="w-56 h-56 mx-auto relative group">
              {/* Elegant layered frame */}
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 opacity-75 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700 shadow-xl"></div>
              <div className="absolute inset-2 bg-stone-800"></div>
              <div className="absolute inset-3 border-2 border-amber-600/40"></div>
              <div className="absolute inset-5 overflow-hidden shadow-inner">
                <img
                  src={profileImg}
                  alt="Yonas Melkie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Refined corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-600"></div>
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-bl from-amber-500 to-orange-600"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 bg-gradient-to-tr from-amber-500 to-orange-600"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-gradient-to-tl from-amber-500 to-orange-600"></div>
            </div>
          </div>

          {/* Horizontal line accent */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-32 bg-amber-700"></div>
            <div className="h-3 w-3 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-32 bg-amber-700"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-stone-900 tracking-wider uppercase animate-fade-in">
            Yonas Melkie
          </h1>

          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-amber-700"></div>
            <p className="text-xl md:text-2xl text-stone-700 mx-6 tracking-wide uppercase font-semibold">
              Computer Science Student
            </p>
            <div className="h-px w-24 bg-amber-700"></div>
          </div>

          <button
            onClick={() => scrollToSection('Projects')}
            className="bg-stone-800 text-amber-100 px-12 py-4 border-4 border-amber-600 font-bold hover:bg-amber-700 hover:text-stone-900 transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Bottom geometric border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-900"></div>
      <div className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700"></div>
    </header>
  );
};

export default Header;
