import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, User } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-1">
              <div className="flex">
                <div className="h-8 w-4 bg-blue-600 rounded-l"></div>
                <div className="h-8 w-4 bg-blue-600 mx-0.5"></div>
                <div className="h-8 w-4 bg-orange-500 rounded-r"></div>
              </div>
              <span
                className={`font-bold text-xl ${
                  isScrolled || !isHomePage ? "text-blue-600" : "text-white"
                }`}
              >
                StayScape
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#"
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled || !isHomePage ? "text-gray-700" : "text-white"
              }`}
            >
              Deals
            </Link>
            <Link
              to="#"
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled || !isHomePage ? "text-gray-700" : "text-white"
              }`}
            >
              Packages
            </Link>
            <div className="flex items-center space-x-2 ml-4">
              <button
                className={`flex items-center space-x-1 p-2 rounded-full hover:bg-gray-100 transition-colors ${
                  isScrolled || !isHomePage
                    ? "text-gray-700"
                    : "text-white hover:text-gray-700"
                }`}
              >
                <Globe size={20} />
                <span className="text-sm font-medium">EN</span>
              </button>
              <button
                className={`flex items-center space-x-1 p-2 rounded-full hover:bg-gray-100 transition-colors ${
                  isScrolled || !isHomePage
                    ? "text-gray-700"
                    : "text-white hover:text-gray-700"
                }`}
              >
                <User size={20} />
                <span className="text-sm font-medium">Account</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X
                size={24}
                className={
                  isScrolled || !isHomePage ? "text-gray-700" : "text-white"
                }
              />
            ) : (
              <Menu
                size={24}
                className={
                  isScrolled || !isHomePage ? "text-gray-700" : "text-white"
                }
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="#"
              className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Deals
            </Link>
            <Link
              to="#"
              className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <button className="flex items-center space-x-2 py-2">
                <Globe size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">English</span>
              </button>
              <button className="flex items-center space-x-2 py-2">
                <User size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Account</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
