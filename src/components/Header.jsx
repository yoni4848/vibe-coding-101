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
            {/* Logo - Geometric Wright style */}
            <div className="flex-shrink-0">
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Outer geometric frame - rotated 45 degrees */}
                <div className="absolute inset-0 border-2 border-amber-100 transform rotate-45"></div>
                <div className="absolute inset-0.5 border border-amber-600 transform rotate-45"></div>
                <div className="absolute inset-1 bg-stone-800 transform rotate-45"></div>
                {/* Text centered without rotation */}
                <span className="text-sm font-bold text-amber-100 relative z-10 tracking-wide">YM</span>
                {/* Corner accents - positioned outside diamond corners */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-orange-700"></div>
                <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 w-2.5 h-2.5 bg-orange-700"></div>
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-orange-700"></div>
                <div className="absolute top-1/2 -left-2.5 -translate-y-1/2 w-2.5 h-2.5 bg-orange-700"></div>
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
          {/* Profile picture with geometric frame */}
          <div className="mb-12 relative">
            <div className="w-48 h-48 mx-auto relative">
              {/* Outer geometric frame */}
              <div className="absolute inset-0 border-8 border-stone-800 transform rotate-0"></div>
              <div className="absolute inset-2 border-4 border-amber-600"></div>
              <div className="absolute inset-4 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Yonas Melkie"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-700"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-700"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-700"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-700"></div>
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
