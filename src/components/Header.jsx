import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white/10 backdrop-blur-md fixed top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">YM</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('About')} className="hover:text-pink-200 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('Skills')} className="hover:text-pink-200 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('Projects')} className="hover:text-pink-200 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('Contact')} className="hover:text-pink-200 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-pink-200 focus:outline-none"
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
          <div className="md:hidden bg-white/10 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('About')}
                className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('Skills')}
                className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('Projects')}
                className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('Contact')}
                className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-2">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-pink-500">
                YM
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Yonas Melkie
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 mb-8">
            Computer Science Student
          </p>
          <button
            onClick={() => scrollToSection('Projects')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition-all transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
