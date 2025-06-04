import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeDropdown) setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Forecastlyy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown('tools')}
              >
                Weather Tools
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Link to="/tools/weather-comparison" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Weather Comparison
                  </Link>
                  <Link to="/tools/weather-alerts" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Weather Alerts
                  </Link>
                  <Link to="/tools/air-quality-index" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Air Quality Index
                  </Link>
                  <Link to="/tools/weather-maps" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Weather Maps
                  </Link>
                  <Link to="/tools/weather-forecast" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Weather Forecast
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Link to="/education-center" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Education Center
                  </Link>
                  <Link to="/blog" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                  <Link to="/safety-guide" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Safety Guide
                  </Link>
                  <Link to="/faq" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            
            <a 
              href="https://forecastlyy.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Visit Forecastlyy
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <Link 
              to="/" 
              className="block py-3 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            
            {/* Tools Dropdown Mobile */}
            <div>
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown('tools')}
              >
                <span>Weather Tools</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'tools' ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'tools' && (
                <div className="pl-4 border-l-2 border-blue-100">
                  <Link 
                    to="/tools/weather-comparison" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Weather Comparison
                  </Link>
                  <Link 
                    to="/tools/weather-alerts" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Weather Alerts
                  </Link>
                  <Link 
                    to="/tools/air-quality-index" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Air Quality Index
                  </Link>
                  <Link 
                    to="/tools/weather-maps" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Weather Maps
                  </Link>
                  <Link 
                    to="/tools/weather-forecast" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Weather Forecast
                  </Link>
                </div>
              )}
            </div>
            
            {/* Resources Dropdown Mobile */}
            <div>
              <button 
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => toggleDropdown('resources')}
              >
                <span>Resources</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'resources' ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div className="pl-4 border-l-2 border-blue-100">
                  <Link 
                    to="/education-center" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Education Center
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/safety-guide" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Safety Guide
                  </Link>
                  <Link 
                    to="/faq" 
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="block py-3 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            
            <a 
              href="https://forecastlyy.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-3 text-blue-600 font-medium hover:text-blue-800 transition-colors"
              onClick={toggleMobileMenu}
            >
              Visit Forecastlyy →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
